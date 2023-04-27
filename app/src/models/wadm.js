function weightedAverageDecisionFunction(inputs, weights) {
    if (inputs.length !== weights.length) {
      throw new Error("Inputs and weights arrays must have the same length.");
    }
  
    var sum = 0;
    var weightSum = 0;
  
    for (var i = 0; i < inputs.length; i++) {
      sum += inputs[i] * weights[i];
      weightSum += weights[i];
    }
  
    return (sum / weightSum).toFixed(2);
  }

//Porsche 911
var inputs = [5, 10, 10, 8, 7, 8, 10, 10, 2, 2, 5, 7, 2];
var weights = [2, 7, 25, 7, 5, 15, 3, 10, 3, 3, 2, 5, 4];

//Model S
var inputs2 = [10, 8, 8, 8, 9, 10, 7.5, 10, 5, 10, 8, 10, 10];
var weights2 = [2, 7, 25, 7, 5, 15, 3, 10, 3, 3, 2, 5, 4];

var result = weightedAverageDecisionFunction(inputs2, weights2);

console.log(result);
