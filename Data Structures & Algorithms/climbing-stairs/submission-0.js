class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
       const memo = {}

       function dp(k) {
        if(k <= 2) return k;
        if(memo[k]) return memo[k];

        memo[k] = dp(k-1) + dp(k - 2);
        return memo[k]
       } 

       return dp(n)
    }
}
