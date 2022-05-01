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
  if (!Array.isArray(arr)){
  throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let cloneArr = arr.slice(0);

  for (let i = 0; i < arr.length; i++) {
    if (cloneArr[i] === "--discard-next") {
      cloneArr.splice(i + 1, 1);
    }
    if (cloneArr[i] === "--discard-prev" && i !== 0 ) {
      cloneArr.splice(i - 1, 1);
    }
    if (cloneArr[i] === "--double-next" && i !== cloneArr.length - 1) {
      cloneArr.splice(i, 0, cloneArr[i+1]);
    }
    if (cloneArr[i] === "--double-prev" && i !== 0) {
      cloneArr.splice(i, 0, cloneArr[i-1]);
    }
  }return cloneArr
  
}

module.exports = {
  transform
};
