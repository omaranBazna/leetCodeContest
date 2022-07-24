/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  // loop through the rows
  //for every row loop through the columns
  //compare the row and column and break comparing once finding mismatch
  //add to count if match

  let count = 0;
  let match = false;
  for (let row of grid) {
    for (let col = 0; col < grid.length; col++) {
      ///start comparing th row and col

      match = true;

      for (let el = 0; el < grid.length; el++) {
        if (row[el] == grid[el][col]) {
          match = false;
          break;
        }
      }
      if (match) {
        count++;
        console.log(col);
      }
    }
  }
  return count;
};
console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
