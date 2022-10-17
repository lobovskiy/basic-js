const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  };
  
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    
    let letterNumber = '';

    if (count !== 1) {
      letterNumber = count;
    }

    arr.push(letterNumber, str[i]);
  }

  return arr.join('');
}

module.exports = {
  encodeLine
};
