const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let arr = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      if (members[i].charAt(0) === ' ') {
        for (let j = 1; j < members[i].length; j++) {
          if (members[i].charAt(j) === ' ') {
            continue;
          } else {
            arr[i] = members[i].charAt(j);
            break;
          }
        }

      } else arr[i] = members[i].charAt(0);
    } else continue;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != undefined) {
      arr[i] = arr[i].toUpperCase();
    }
  }
 
  let str = arr.sort().join('');
  return str
}
