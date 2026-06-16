class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
  let maxSoFar = nums[0] // eng katta summa (boshlanish uchun birinchi elementdan olamiz, hamma manfiy bo‘lsa ham ishlaydi)
  let maxEndingHere = nums[0] // hozirgi subarray summasi (nums[0..i]) uchun

  for (let i = 1; i < nums.length; i++) {
    // massivni boshidan oxirigacha yuramiz
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i])
    console.log(`maxEndingHere at index ${i}: ${maxEndingHere}`)
    // hozirgi elementni alohida olish yoki hozirgi elementni oldingi subarrayga qo‘shishdan qaysi biri katta ekanini tanlaymiz
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
    // agar hozirgi subarray summasi maxSoFar dan katta bo‘lsa, maxSoFar ni yangilaymiz
  }

  return maxSoFar // topilgan eng katta subarray summani qaytaramiz
    }
}
