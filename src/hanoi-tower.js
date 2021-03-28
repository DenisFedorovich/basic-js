const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let steps = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(steps / (turnsSpeed / 3600));

  let hanoi = {
    turns : steps,
    seconds : time
  };

  return hanoi;
};
