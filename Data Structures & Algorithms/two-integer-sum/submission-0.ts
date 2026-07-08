class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            if (map.has(difference)) {
                return [map.get(difference)!, i];
            }
            map.set(nums[i], i);
        }

        return [];
    }
}