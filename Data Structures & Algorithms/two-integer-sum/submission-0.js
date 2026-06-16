class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];
       if(map[complement] !== undefined) {
        console.log("com", complement);
        console.log('i', i);
        return [map[complement], i];
     
       }
       map[nums[i]] = i

        }
        return []
    }
}
