class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
    const result = [];

    function backtrack(start, path) {
        result.push([...path]); // Add current subset

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);               // Choose
            backtrack(i + 1, path);           // Explore
            path.pop();                       // Un-choose (backtrack)
        }
    }

    backtrack(0, []);
    return result;
    }
}
