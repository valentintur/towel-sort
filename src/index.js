
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  return matrix.flat(Infinity).sort((a,b) => a-b);
}
