const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  if (str === null) str = 'null';

  let repeatTimes = 1;
  if (options.repeatTimes !== undefined) repeatTimes = options.repeatTimes;

  let separator = '+';
  if (options.separator !== undefined) separator = options.separator;

  let addition = options.addition;
  if (options.addition === null) addition = 'null';

  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes !== undefined) additionRepeatTimes = options.additionRepeatTimes;

  let additionSeparator = '|';
  if (options.additionSeparator !== undefined) additionSeparator = options.additionSeparator;


  let arrStr = [];

  for (let i = 0; i < repeatTimes; i++) {

    let arrStr1 = [];
    arrStr1.push(str);

    for (let j = 0; j < additionRepeatTimes; j++) {
      arrStr1.push(addition);

      if (j < additionRepeatTimes - 1) {
        arrStr1.push(additionSeparator);
      }
    }
    arrStr1 = arrStr1.join('');
    arrStr.push(arrStr1);
  }
  return arrStr.join(separator);
};
  