class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globMax = nums[0]; // hozirgacha topilgan eng katta (oddiy) subarray summasi
        let globMin = nums[0] // hozirgacha topilgan eng kichik subarray summasi

        let curMax = 0, // joriy indeksda tugaydigan maksimum subarray summasi
            curMin = 0, // joriy indeksda tugaydigan minimum subarray summasi
            total = 0;  // massivdagi hamma elementlar yig'indisi

            for (const num of nums) {
                 // Kadane(max): 
                 // 1) oldingi curMax ga num qo'shib davom ettirish (curMax + num)
                 // 2) yoki subarrayni yangidan num dan boshlash (num)
                 // shulardan kattasini tanlaymiz => joriy joyda tugaydigan eng yaxshi max summa
                curMax = Math.max(curMax + num, num);
                // Kadane(min):
                // 1) oldingi curMin ga num qo'shib davom ettirish (curMin + num)
                // 2) yoki yangidan num dan boshlash (num)
                // shulardan kichigini tanlaymiz => joriy joyda tugaydigan eng kichik min summa
                curMin = Math.min(curMin + num, num);
                 // totalga joriy elementni qo'shib boramiz => massivning umumiy yig'indisi
                total += num;
                globMax = Math.max(globMax, curMax);
                globMin = Math.min(globMin, curMin);

            }
             // agar globMax musbat bo'lsa, demak massivda kamida bitta ijobiy natija bor
             // javob = max(oddiy max subarray, circular wrap max)
             // circular wrap max = total - globMin:
             // (hamma elementlar) - (eng yomon/min subarray) = qolgan qismi (wrap bo'lgan max subarray)
             // agar globMax <= 0 bo'lsa (hamma manfiy),
             // total - globMin 0 bo'lib qolishi mumkin (noto'g'ri),
             // shuning uchun eng katta manfiy qiymat bo'lgan globMaxni qaytaramiz.
            return globMax > 0 ? Math.max(globMax, total - globMin) : globMax
    }
}
