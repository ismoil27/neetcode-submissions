class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const arr = matrix.flat()

        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === target) return true;
        }
        return false
    }
}
