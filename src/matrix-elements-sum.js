const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  throw new NotImplementedError('Not implemented');
  let sum = 0;
  for (let i = 1; i < matrix.length-1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i+1][j] = 0;
      } else {
        sum += matrix[i][j]; 
      }
    }
  }
  for (let k = 0; k < matrix[0].length; n++) {
    sum += matrix[0][k];    
  }  
return sum
}

module.exports = {
  getMatrixElementsSum
};
