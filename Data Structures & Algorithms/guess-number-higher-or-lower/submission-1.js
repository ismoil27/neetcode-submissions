/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
   let left = 1, right = n;
   while (left <= right) {
    // pick the middle number
    let mid = Math.floor((left + right) / 2);
    const res = guess(mid); // call API

    if(res === 0) {
        return mid // found the number;
    } else if (res === -1) {
        // our guess is too high => move to the left
        right = mid -1;
    } else {
        // our guess is too low => move to the right
        left = mid + 1;
    }
   }
   return -1;
    }
}
