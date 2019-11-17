const brain = require("brain.js");

const config = {
  inputSize: 2,
  hiddenlayers: [1],
  outputSize: 1,
  learningRate: 0.5,
  activation: "sigmoid"
};

const net = new brain.NeuralNetwork(config);

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

const output1 = net.run([0, 0]);
const output2 = net.run([1, 0]);
const output3 = net.run([0, 1]);
const output4 = net.run([1, 1]);

console.log("0 xor 0: " + parseFloat(output1[0]).toFixed(0));
console.log("1 xor 0: " + parseFloat(output2[0]).toFixed(0));
console.log("0 xor 1: " + parseFloat(output3[0]).toFixed(0));
console.log("1 xor 1: " + parseFloat(output4[0]).toFixed(0));
