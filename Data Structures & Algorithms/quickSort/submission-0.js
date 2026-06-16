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
   * Sorts an array of Pair objects in place using Quick Sort.
   * Pivot = right-most element
   * Elements < pivot → left partition
   * Elements >= pivot → right partition
   * Not stable (equal keys may reorder)
   *
   * @param {Pair[]} pairs
   * @returns {Pair[]} The sorted array (same array reference)
   */
  quickSort(pairs) {
    // Recursive helper function to sort the subarray [left, right]
    const sort = (arr, left, right) => {
      // Base case: stop when left index is >= right index (1 or 0 elements)
      if (left < right) {
        // Partition the subarray around a pivot (returns pivot's final index)
        const pivotIndex = this._partition(arr, left, right);

        // Recursively sort the left side (elements < pivot)
        sort(arr, left, pivotIndex - 1);

        // Recursively sort the right side (elements >= pivot)
        sort(arr, pivotIndex + 1, right);
      }
    };

    // Start sorting the entire array
    sort(pairs, 0, pairs.length - 1);

    // Return the sorted array (sorting is in-place)
    return pairs;
  }

  /**
   * Partition function (Lomuto scheme)
   * Rearranges elements in arr[left..right] so that:
   * - all elements with key < pivot.key come before pivot
   * - all elements with key >= pivot.key come after pivot
   * Pivot is chosen as arr[right]
   *
   * @param {Pair[]} arr
   * @param {number} left - start index of subarray
   * @param {number} right - end index of subarray (pivot position before partition)
   * @returns {number} The pivot's final index
   */
  _partition(arr, left, right) {
    const pivot = arr[right]; // Choose right-most element as pivot
    let i = left - 1;         // Tracks end of "< pivot" region (starts before left)

    // Scan through the subarray from left to right-1
    for (let j = left; j < right; j++) {
      // If current element's key is strictly less than pivot's key:
      if (arr[j].key < pivot.key) {
        i++; // expand the "< pivot" region by one
        // Swap current element into the "< pivot" region
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      // If arr[j].key >= pivot.key, do nothing — element stays in right partition
    }

    // Place the pivot right after the "< pivot" region
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

    // Return the pivot's final index
    return i + 1;
  }
}
