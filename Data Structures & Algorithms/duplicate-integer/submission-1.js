class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
        if(map[num] !== undefined) {
            return true
        }
        // mark this number as seen
        map[num] = true
        }
        return false

    }
}
