const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let sum = 1;
    arr.forEach(i => {
      if (Array.isArray(i)) {
        sum = Math.max(this.calculateDepth(i) + 1, sum);
      }
    })
    
    return sum;
  }

}; 
