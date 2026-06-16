class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
    const unique = [...new Set(nums)];

for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i]
}
    console.log("UNIQUE:", unique);
    return unique.length;
    }
}
