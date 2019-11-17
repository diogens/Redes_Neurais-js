const brain = require("brain.js");

const configuração = {
  inputSize: 3,
  hiddenlayers: [10],
  outputSize: 1,
  learningRate: 0.2,
  activation: "leaky-relu"
};

const rna = new brain.NeuralNetwork(configuração);

rna.train(
  [
    { input: [0.04, 0.0, 0.34], output: [0.3001] },
    { input: [0.02, 0.1, 0.21], output: [0.3501] }
  ],
  { iterations: 100 }
);

let output = rna.run([0.02, 0.0, 0.34]);

output[0] *= 10000;

console.log("R$ " + output[0].toFixed(2));
