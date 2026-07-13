class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const hash: Record<string, string[]> = {};

        for (const str of strs) {
            const key = str.split("").sort().join("");

            if (!hash[key]) {
                hash[key] = [];
            }

            hash[key].push(str);
        }

        return Object.values(hash);
    }
}