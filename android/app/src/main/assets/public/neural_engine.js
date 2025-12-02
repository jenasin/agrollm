// ===========================================
// NEURAL LEARNING ENGINE
// Deep Learning for Adaptive Education
// ===========================================

window.NeuralEngine = (function() {
    'use strict';

    // =========================================
    // MATH UTILITIES
    // =========================================
    const sigmoid = x => 1 / (1 + Math.exp(-Math.max(-500, Math.min(500, x))));
    const sigmoidDerivative = x => x * (1 - x);
    const tanh = x => Math.tanh(x);
    const tanhDerivative = x => 1 - x * x;
    const relu = x => Math.max(0, x);
    const reluDerivative = x => x > 0 ? 1 : 0;
    const softmax = arr => {
        const max = Math.max(...arr);
        const exps = arr.map(x => Math.exp(x - max));
        const sum = exps.reduce((a, b) => a + b, 0);
        return exps.map(x => x / sum);
    };

    // Random initialization (Xavier/He)
    const randomWeight = (fanIn, fanOut) => {
        const limit = Math.sqrt(6 / (fanIn + fanOut));
        return (Math.random() * 2 - 1) * limit;
    };

    // Dot product
    const dot = (a, b) => a.reduce((sum, val, i) => sum + val * b[i], 0);

    // Vector operations
    const vecAdd = (a, b) => a.map((v, i) => v + b[i]);
    const vecSub = (a, b) => a.map((v, i) => v - b[i]);
    const vecMul = (a, scalar) => a.map(v => v * scalar);
    const vecNorm = a => Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
    const normalize = a => { const n = vecNorm(a); return n > 0 ? vecMul(a, 1/n) : a; };

    // =========================================
    // NEURAL NETWORK CLASS
    // =========================================
    class NeuralNetwork {
        constructor(layerSizes, learningRate = 0.1) {
            this.layers = layerSizes;
            this.lr = learningRate;
            this.weights = [];
            this.biases = [];

            // Initialize weights and biases
            for (let i = 0; i < layerSizes.length - 1; i++) {
                const w = [];
                for (let j = 0; j < layerSizes[i + 1]; j++) {
                    const row = [];
                    for (let k = 0; k < layerSizes[i]; k++) {
                        row.push(randomWeight(layerSizes[i], layerSizes[i + 1]));
                    }
                    w.push(row);
                }
                this.weights.push(w);
                this.biases.push(new Array(layerSizes[i + 1]).fill(0).map(() => randomWeight(1, 1) * 0.1));
            }
        }

        // Forward pass
        forward(input) {
            this.activations = [input];
            let current = input;

            for (let i = 0; i < this.weights.length; i++) {
                const next = [];
                for (let j = 0; j < this.weights[i].length; j++) {
                    let sum = this.biases[i][j];
                    for (let k = 0; k < current.length; k++) {
                        sum += this.weights[i][j][k] * current[k];
                    }
                    // Use tanh for hidden layers, sigmoid for output
                    next.push(i === this.weights.length - 1 ? sigmoid(sum) : tanh(sum));
                }
                this.activations.push(next);
                current = next;
            }
            return current;
        }

        // Backpropagation
        backward(target) {
            const deltas = [];
            const output = this.activations[this.activations.length - 1];

            // Output layer error
            let delta = output.map((o, i) => (target[i] - o) * sigmoidDerivative(o));
            deltas.unshift(delta);

            // Hidden layers error
            for (let i = this.weights.length - 2; i >= 0; i--) {
                const newDelta = [];
                for (let j = 0; j < this.weights[i][0].length; j++) {
                    let error = 0;
                    for (let k = 0; k < this.weights[i + 1].length; k++) {
                        error += deltas[0][k] * this.weights[i + 1][k][j];
                    }
                    newDelta.push(error * tanhDerivative(this.activations[i + 1][j]));
                }
                deltas.unshift(newDelta);
            }

            // Update weights and biases
            for (let i = 0; i < this.weights.length; i++) {
                for (let j = 0; j < this.weights[i].length; j++) {
                    for (let k = 0; k < this.weights[i][j].length; k++) {
                        this.weights[i][j][k] += this.lr * deltas[i][j] * this.activations[i][k];
                    }
                    this.biases[i][j] += this.lr * deltas[i][j];
                }
            }
        }

        // Train on single example
        train(input, target) {
            this.forward(input);
            this.backward(target);
        }

        // Get loss
        loss(predicted, target) {
            return target.reduce((sum, t, i) => sum + Math.pow(t - predicted[i], 2), 0) / target.length;
        }

        // Serialize for storage
        toJSON() {
            return { layers: this.layers, weights: this.weights, biases: this.biases, lr: this.lr };
        }

        // Load from storage
        static fromJSON(json) {
            const nn = new NeuralNetwork(json.layers, json.lr);
            nn.weights = json.weights;
            nn.biases = json.biases;
            return nn;
        }
    }

    // =========================================
    // STUDENT EMBEDDING
    // =========================================
    const EMBEDDING_DIM = 16;
    const NUM_MODULES = 10;
    const NUM_SKILLS = 50; // Skills across all modules

    class StudentEmbedding {
        constructor() {
            // Student vector - represents overall learning state
            this.vector = new Array(EMBEDDING_DIM).fill(0).map(() => Math.random() * 0.1);

            // Knowledge state per skill (0-1 mastery)
            this.knowledgeState = new Array(NUM_SKILLS).fill(0.5);

            // Skill embeddings (what each skill "means")
            this.skillEmbeddings = [];
            for (let i = 0; i < NUM_SKILLS; i++) {
                this.skillEmbeddings.push(new Array(EMBEDDING_DIM).fill(0).map(() => randomWeight(EMBEDDING_DIM, EMBEDDING_DIM)));
            }

            // Learning velocity per skill
            this.learningVelocity = new Array(NUM_SKILLS).fill(0);

            // Forgetting curve parameters
            this.lastPractice = new Array(NUM_SKILLS).fill(Date.now());

            // Attention weights (which skills student focuses on)
            this.attention = new Array(NUM_SKILLS).fill(1 / NUM_SKILLS);

            // History for trajectory analysis
            this.trajectory = [];
        }

        // Update student embedding after interaction
        updateFromInteraction(skillId, wasCorrect, responseTime) {
            const now = Date.now();
            const timeSinceLast = (now - this.lastPractice[skillId]) / (1000 * 60 * 60); // hours

            // Update knowledge state with forgetting
            const forgettingFactor = Math.exp(-0.1 * timeSinceLast);
            this.knowledgeState[skillId] *= forgettingFactor;

            // Learning update (simplified Bayesian Knowledge Tracing)
            const pLearn = 0.3;  // Probability of learning
            const pGuess = 0.2;  // Probability of guessing correctly
            const pSlip = 0.1;   // Probability of slipping (knowing but wrong)

            const pKnow = this.knowledgeState[skillId];
            if (wasCorrect) {
                // P(Know | Correct) using Bayes
                const pCorrectGivenKnow = 1 - pSlip;
                const pCorrectGivenNotKnow = pGuess;
                const pCorrect = pKnow * pCorrectGivenKnow + (1 - pKnow) * pCorrectGivenNotKnow;
                this.knowledgeState[skillId] = (pKnow * pCorrectGivenKnow) / pCorrect;
            } else {
                // P(Know | Incorrect)
                const pIncorrectGivenKnow = pSlip;
                const pIncorrectGivenNotKnow = 1 - pGuess;
                const pIncorrect = pKnow * pIncorrectGivenKnow + (1 - pKnow) * pIncorrectGivenNotKnow;
                this.knowledgeState[skillId] = (pKnow * pIncorrectGivenKnow) / pIncorrect;
            }

            // Learning transition
            this.knowledgeState[skillId] += (1 - this.knowledgeState[skillId]) * pLearn;
            this.knowledgeState[skillId] = Math.max(0.01, Math.min(0.99, this.knowledgeState[skillId]));

            // Update learning velocity
            const delta = wasCorrect ? 0.1 : -0.05;
            this.learningVelocity[skillId] = 0.8 * this.learningVelocity[skillId] + 0.2 * delta;

            // Update student embedding vector
            const skillEmb = this.skillEmbeddings[skillId];
            const updateDir = wasCorrect ? 1 : -1;
            const lr = 0.05;
            for (let i = 0; i < EMBEDDING_DIM; i++) {
                this.vector[i] += lr * updateDir * skillEmb[i] * (1 - Math.abs(this.vector[i]));
            }
            this.vector = normalize(this.vector);

            // Update attention (focus more on weak skills)
            this.updateAttention();

            // Record trajectory
            this.trajectory.push({
                timestamp: now,
                skillId,
                wasCorrect,
                responseTime,
                knowledgeState: [...this.knowledgeState],
                vector: [...this.vector]
            });

            this.lastPractice[skillId] = now;
        }

        // Self-attention mechanism for skill focus
        updateAttention() {
            // Focus on skills that are weak but learnable
            const scores = this.knowledgeState.map((k, i) => {
                const weakness = 1 - k;
                const learnability = 0.5 + this.learningVelocity[i];
                return weakness * learnability;
            });

            this.attention = softmax(scores);
        }

        // Get skill ID from module and question
        getSkillId(moduleId, questionIndex) {
            return (moduleId - 1) * 5 + (questionIndex % 5);
        }

        // Predict success probability on a skill
        predictSuccess(skillId) {
            return this.knowledgeState[skillId];
        }

        // Get development vector (trajectory direction)
        getDevelopmentVector() {
            if (this.trajectory.length < 2) {
                return new Array(EMBEDDING_DIM).fill(0);
            }
            const recent = this.trajectory.slice(-10);
            const oldVec = recent[0].vector;
            const newVec = recent[recent.length - 1].vector;
            return vecSub(newVec, oldVec);
        }

        // Get learning momentum
        getMomentum() {
            if (this.trajectory.length < 5) return 0;
            const recent = this.trajectory.slice(-10);
            const correct = recent.filter(t => t.wasCorrect).length;
            return (correct / recent.length - 0.5) * 2; // -1 to 1
        }

        // Serialize
        toJSON() {
            return {
                vector: this.vector,
                knowledgeState: this.knowledgeState,
                learningVelocity: this.learningVelocity,
                lastPractice: this.lastPractice,
                attention: this.attention,
                trajectory: this.trajectory.slice(-100) // Keep last 100
            };
        }

        static fromJSON(json) {
            const se = new StudentEmbedding();
            if (json) {
                se.vector = json.vector || se.vector;
                se.knowledgeState = json.knowledgeState || se.knowledgeState;
                se.learningVelocity = json.learningVelocity || se.learningVelocity;
                se.lastPractice = json.lastPractice || se.lastPractice;
                se.attention = json.attention || se.attention;
                se.trajectory = json.trajectory || [];
            }
            return se;
        }
    }

    // =========================================
    // DEEP KNOWLEDGE TRACING (Simplified)
    // =========================================
    class DeepKnowledgeTracer {
        constructor() {
            // RNN-like network: input -> hidden -> output
            // Input: [skill_one_hot(50), correct(1), time_feature(1)] = 52
            // Hidden: 32
            // Output: [predicted_knowledge(50)] = 50
            this.network = new NeuralNetwork([52, 32, 50], 0.05);
            this.hiddenState = new Array(32).fill(0);
        }

        // Create input vector
        createInput(skillId, wasCorrect, timeDelta) {
            const input = new Array(52).fill(0);
            input[skillId] = 1; // One-hot skill
            input[50] = wasCorrect ? 1 : 0;
            input[51] = Math.min(1, timeDelta / 3600); // Normalized time
            return input;
        }

        // Update and predict
        update(skillId, wasCorrect, timeDelta) {
            const input = this.createInput(skillId, wasCorrect, timeDelta);

            // Combine with hidden state (simplified LSTM-like)
            const combined = input.map((v, i) => i < 32 ? v + 0.5 * this.hiddenState[i] : v);

            // Forward pass
            const output = this.network.forward(combined);

            // Update hidden state
            const activations = this.network.activations[1]; // Hidden layer
            this.hiddenState = activations.map((a, i) => 0.9 * this.hiddenState[i] + 0.1 * a);

            // Train on next interaction (self-supervised)
            // Target is smoothed knowledge state
            const target = output.map((o, i) => {
                if (i === skillId) return wasCorrect ? Math.min(1, o + 0.1) : Math.max(0, o - 0.05);
                return o;
            });
            this.network.train(combined, target);

            return output;
        }

        // Predict knowledge state
        predict(skillId) {
            const input = this.createInput(skillId, true, 0);
            const output = this.network.forward(input);
            return output[skillId];
        }

        toJSON() {
            return {
                network: this.network.toJSON(),
                hiddenState: this.hiddenState
            };
        }

        static fromJSON(json) {
            const dkt = new DeepKnowledgeTracer();
            if (json) {
                dkt.network = NeuralNetwork.fromJSON(json.network);
                dkt.hiddenState = json.hiddenState || dkt.hiddenState;
            }
            return dkt;
        }
    }

    // =========================================
    // QUESTION RECOMMENDER
    // =========================================
    class QuestionRecommender {
        constructor() {
            // Network to predict optimal next question
            // Input: [student_embedding(16), knowledge_state(50), momentum(1)] = 67
            // Output: [skill_scores(50)]
            this.network = new NeuralNetwork([67, 32, 50], 0.03);
        }

        recommend(studentEmbedding, knowledgeState, momentum) {
            const input = [...studentEmbedding.vector, ...knowledgeState, momentum];
            const scores = this.network.forward(input);

            // Zone of proximal development: not too easy, not too hard
            const zpd = scores.map((s, i) => {
                const knowledge = knowledgeState[i];
                // Prefer skills where knowledge is 0.3-0.7 (learnable)
                const zpdScore = 1 - Math.abs(knowledge - 0.5) * 2;
                return s * zpdScore;
            });

            return zpd;
        }

        // Train on outcome
        train(input, chosenSkill, wasSuccessful) {
            const target = this.network.forward(input);
            // Reinforce or penalize the choice
            target[chosenSkill] += wasSuccessful ? 0.1 : -0.1;
            target[chosenSkill] = Math.max(0, Math.min(1, target[chosenSkill]));
            this.network.train(input, target);
        }

        toJSON() {
            return { network: this.network.toJSON() };
        }

        static fromJSON(json) {
            const qr = new QuestionRecommender();
            if (json) qr.network = NeuralNetwork.fromJSON(json.network);
            return qr;
        }
    }

    // =========================================
    // MAIN ENGINE
    // =========================================
    class Engine {
        constructor() {
            this.studentEmbedding = new StudentEmbedding();
            this.dkt = new DeepKnowledgeTracer();
            this.recommender = new QuestionRecommender();
            this.interactionCount = 0;
            this.lastInteractionTime = Date.now();

            // Load from storage
            this.load();
        }

        // Process answer
        processAnswer(moduleId, questionIndex, wasCorrect, responseTimeMs) {
            const skillId = this.studentEmbedding.getSkillId(moduleId, questionIndex);
            const timeDelta = (Date.now() - this.lastInteractionTime) / 1000;

            // Update all models
            this.studentEmbedding.updateFromInteraction(skillId, wasCorrect, responseTimeMs);
            this.dkt.update(skillId, wasCorrect, timeDelta);

            // Train recommender
            const input = [
                ...this.studentEmbedding.vector,
                ...this.studentEmbedding.knowledgeState,
                this.studentEmbedding.getMomentum()
            ];
            this.recommender.train(input, skillId, wasCorrect);

            this.interactionCount++;
            this.lastInteractionTime = Date.now();

            // Auto-save periodically
            if (this.interactionCount % 5 === 0) {
                this.save();
            }

            return this.getState();
        }

        // Get recommended next skill/question
        getRecommendation() {
            const momentum = this.studentEmbedding.getMomentum();
            const scores = this.recommender.recommend(
                this.studentEmbedding,
                this.studentEmbedding.knowledgeState,
                momentum
            );

            // Find best skill
            let bestSkill = 0;
            let bestScore = scores[0];
            for (let i = 1; i < scores.length; i++) {
                if (scores[i] > bestScore) {
                    bestScore = scores[i];
                    bestSkill = i;
                }
            }

            // Convert skill to module/level
            const moduleId = Math.floor(bestSkill / 5) + 1;
            const levelHint = (bestSkill % 5) * 2 + 1;

            return {
                skillId: bestSkill,
                moduleId,
                levelHint,
                confidence: bestScore,
                scores: scores
            };
        }

        // Predict success on question
        predictSuccess(moduleId, questionIndex) {
            const skillId = this.studentEmbedding.getSkillId(moduleId, questionIndex);
            const embeddingPred = this.studentEmbedding.predictSuccess(skillId);
            const dktPred = this.dkt.predict(skillId);

            // Ensemble prediction
            return 0.6 * embeddingPred + 0.4 * dktPred;
        }

        // Get current learning state
        getState() {
            const devVector = this.studentEmbedding.getDevelopmentVector();
            const momentum = this.studentEmbedding.getMomentum();
            const avgKnowledge = this.studentEmbedding.knowledgeState.reduce((a, b) => a + b, 0) / NUM_SKILLS;

            // Classify learning phase
            let phase = 'exploring';
            if (avgKnowledge > 0.7) phase = 'mastering';
            else if (avgKnowledge > 0.4) phase = 'consolidating';
            else if (momentum > 0.3) phase = 'accelerating';
            else if (momentum < -0.3) phase = 'struggling';

            return {
                embedding: this.studentEmbedding.vector,
                knowledgeState: this.studentEmbedding.knowledgeState,
                developmentVector: devVector,
                momentum,
                avgKnowledge,
                phase,
                attention: this.studentEmbedding.attention,
                interactionCount: this.interactionCount,
                strongSkills: this.getStrongSkills(),
                weakSkills: this.getWeakSkills()
            };
        }

        // Get strong skills (top 5)
        getStrongSkills() {
            return this.studentEmbedding.knowledgeState
                .map((k, i) => ({ skillId: i, knowledge: k }))
                .sort((a, b) => b.knowledge - a.knowledge)
                .slice(0, 5);
        }

        // Get weak skills (bottom 5)
        getWeakSkills() {
            return this.studentEmbedding.knowledgeState
                .map((k, i) => ({ skillId: i, knowledge: k }))
                .sort((a, b) => a.knowledge - b.knowledge)
                .slice(0, 5);
        }

        // Get skill name
        getSkillName(skillId) {
            const moduleNames = ['Soil', 'Protection', 'Harvest', 'Irrigation', 'Machinery',
                                 'Ecology', 'Livestock', 'Fertilization', 'Weather', 'Specialty'];
            const moduleId = Math.floor(skillId / 5);
            const subSkill = skillId % 5 + 1;
            return `${moduleNames[moduleId] || 'Unknown'} L${subSkill * 2}`;
        }

        // Save to localStorage
        save() {
            const data = {
                studentEmbedding: this.studentEmbedding.toJSON(),
                dkt: this.dkt.toJSON(),
                recommender: this.recommender.toJSON(),
                interactionCount: this.interactionCount,
                lastInteractionTime: this.lastInteractionTime
            };
            localStorage.setItem('neural_engine', JSON.stringify(data));
            console.log('[NeuralEngine] Saved to localStorage');
        }

        // Load from localStorage
        load() {
            const saved = localStorage.getItem('neural_engine');
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    this.studentEmbedding = StudentEmbedding.fromJSON(data.studentEmbedding);
                    this.dkt = DeepKnowledgeTracer.fromJSON(data.dkt);
                    this.recommender = QuestionRecommender.fromJSON(data.recommender);
                    this.interactionCount = data.interactionCount || 0;
                    this.lastInteractionTime = data.lastInteractionTime || Date.now();
                    console.log('[NeuralEngine] Loaded from localStorage');
                } catch (e) {
                    console.error('[NeuralEngine] Failed to load:', e);
                }
            }
        }

        // Reset all learning
        reset() {
            this.studentEmbedding = new StudentEmbedding();
            this.dkt = new DeepKnowledgeTracer();
            this.recommender = new QuestionRecommender();
            this.interactionCount = 0;
            localStorage.removeItem('neural_engine');
            console.log('[NeuralEngine] Reset complete');
        }
    }

    // Create singleton instance
    const engine = new Engine();

    // Public API
    return {
        processAnswer: (m, q, c, t) => engine.processAnswer(m, q, c, t),
        getRecommendation: () => engine.getRecommendation(),
        predictSuccess: (m, q) => engine.predictSuccess(m, q),
        getState: () => engine.getState(),
        getSkillName: (id) => engine.getSkillName(id),
        reset: () => engine.reset(),
        save: () => engine.save()
    };

})();

console.log('[NeuralEngine] Deep Learning Engine loaded!');
