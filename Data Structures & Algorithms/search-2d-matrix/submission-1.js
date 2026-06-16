class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
  // if nothing to search => return false
  if(matrix.length === 0 || matrix[0].length === 0) return false;
  const m = matrix.length; // number of rows
  const n = matrix[0].length // number of columns
  let left = 0;  // left pointer in the "virtual" 1-D array
  let right = m * n-1 // right pointer (last index) in the virtual array
   // Standard binary search over indices [0, m*n - 1]
   while (left <= right) {
    const mid = Math.floor((left + right) / 2) // midpoint index in the virtual array

    // Map the 1-D mid index back to (row, col) in the 2-D matrix
    const row = Math.floor(mid / n) // which row the mid falls into
    const col = mid % n; // which column inside that row

    const value = matrix[row][col];  // actual value at (row, col)
    if(value === target) return true; // found
    else if (value < target) left = mid + 1;  // target is to the right
    else right = mid - 1; // target is to the left 
   }
   return false; // not found
    }
}
