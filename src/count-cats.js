const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let numberOfCats = 0;

  function findCat(arr) {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];

      if (el == '^^') {
        ++numberOfCats;
      }

      if (Array.isArray(el)) {
        findCat(el);
      }
    }
  }

  findCat(backyard);

  return numberOfCats;
}

module.exports = {
  countCats
};
