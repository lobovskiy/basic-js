const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  let arrCopy = [...arr];
  const newArr = [];
  
  for (i = 0; i < arrCopy.length; i++) {
    const item = arrCopy[i];

    if (item === "skipped") {
      continue;
    }

    switch (item) {
      case "--discard-next":
        i < arrCopy.length - 1 && arrCopy.splice(i + 1, 1, "skipped");
        break;
      case "--discard-prev":
        i !== 0 && arrCopy[i - 1] !== "skipped" && newArr.pop();
        break;
      case "--double-next":
        i < arrCopy.length - 1 && newArr.push(arrCopy[i + 1]);
        break;
      case "--double-prev":
        i !== 0 && arrCopy[i - 1] !== "skipped" && newArr.push(arrCopy[i - 1]);
        break;
    
      default:
        newArr.push(item);
        break;
    }
  }

  return newArr;
}

module.exports = {
  transform
};
