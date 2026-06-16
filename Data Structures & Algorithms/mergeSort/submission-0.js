/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
    // Base case: arrays of length 0 or 1 are already sorted.
    // We return pairs.slice() to return a *new array object* (shallow copy),
    // keeping the function "pure" (it never returns the same array instance
    // that was passed in). This helps ensure callers can trust the input
    // wasn’t mutated and the output is an independent array.
        if (!Array.isArray(pairs) || pairs?.length <= 1) return pairs.slice();

           // Find the middle index to split the array roughly in half.
        const mid = Math.floor(pairs.length / 2);

    // Recursively sort the left half.
    // pairs.slice(0, mid) creates a *new array* containing elements [0, mid).
    // Using slice means we don’t mutate the original array while recursing.
        const left = this.mergeSort(pairs.slice(0, mid));

            // Recursively sort the right half.
    // pairs.slice(mid) creates a *new array* containing elements [mid, end).
        const right = this.mergeSort(pairs.slice(mid));

    // Merge the two sorted halves into a single sorted (and stable) array.
        return this._merge(left, right);
  }
    
    // Merge two sorted arrays of Pair into one sorted array (stable).
    _merge(left, right) {
        // Result array we’ll fill in increasing key order.
        const result = [];

        // i: current index in 'left', j: current index in 'right'
        let i = 0, j = 0;
            // While both arrays still have elements to compare…
    while (i < left.length && j < right.length) {
      // Use <= to keep the algorithm *stable*:
      // when left[i].key === right[j].key, we pick from 'left' first.
      if (left[i].key <= right[j].key) {
        result.push(left[i]); // append the smaller (or equal) item
        i++;                  // advance in 'left'
      } else {
        result.push(right[j]); // append from 'right'
        j++;                   // advance in 'right'
      }
    }

      // One of the arrays is exhausted; append the remainder from the other.
    // Only one (or neither) of these loops will run.
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    // Return the merged, sorted, and stable array.
    return result;

    }
}
