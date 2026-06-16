class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // helper
        const hoursNeeded = (k) => {
            let total = 0;
            for(const p of piles) {
                total += Math.ceil(p/k)
            }
            return total
        }

        let lo = 1;
        let hi = Math.max(...piles)
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if(hoursNeeded(mid) <= h) {
                hi = mid;
            } else {
                lo = mid + 1
            }
        }
        return lo
    }
}
