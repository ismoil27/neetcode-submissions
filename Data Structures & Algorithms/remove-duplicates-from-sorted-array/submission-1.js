class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
   removeDuplicates(nums) {
    if(nums.length === 0) return nums;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        console.log('nums[i]::', nums[i])
        console.log('nums[j]::', nums[j])
        if(nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    console.log("i::", i)
    console.log("i + 1::", i+1)
    return i + 1
    }
}
