const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = ['spring', 'summer', 'autumn', 'winter'];
  if (!date) return 'Unable to determine the time of year!';
  
  if (Object.prototype.toString.call(date) !== '[object Date]') throw Error;
  
  if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11 ) {
    return season[3];
  } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4 ) {
    return season[0];
  } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7 ) {
    return season[1];
  } else return season[2];

};