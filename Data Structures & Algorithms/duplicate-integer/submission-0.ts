class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // Method 1:
        const numbers = Array.from(new Set(nums));
        return numbers.length < nums.length;
    }
}
