const brain = require("brain.js");

//const inteligencia = {
//1: "sigmoid", //Simples
//2: "leaky-relu", //DeepLearning
//};

// supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],

const configuração = {
  inputSize: 3,
  hiddenlayers: [10],
  outputSize: 1,
  learningRate: 0.2,
  activation: "leaky-relu" // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
};

const rna = new brain.NeuralNetwork(configuração);

rna.train(
  [
    //   1º Anos   |  2º Tipo | 3º Salário
    //     2     |   null   |  R$ 4.000
    /**Salário - tipo - anos = Saida do Salário */
    { input: [0.04, 0.0, 0.34], output: [0.3001] },
    /* { input: [0.04, 0.0, 0.24], output: [0.3501] },
    { input: [0.04, 0.0, 0.33], output: [0.3201] },
    { input: [0.04, 0.0, 0.31], output: [0.4001] },
    { input: [0.04, 0.0, 0.35], output: [0.5001] },
    { input: [0.04, 0.0, 0.55], output: [0.1001] }, */
    /* { input: [0.04, 0.0, 0.6], output: [0.3001] }, */
    { input: [0.02, 0.1, 0.21], output: [0.3501] }
  ],
  { iterations: 100 }
);

let output = rna.run([0.02, 0.0, 0.34]);

output[0] *= 10000;

console.log("R$ " + output[0].toFixed(2));
