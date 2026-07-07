class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        let countMapS = new Map<string, number>();
        for (let i = 0; i < s.length; i++) {
            const count = countMapS.get(s[i]) ?? 0;
            countMapS.set(s[i], count + 1);
        }

        let countMapT = new Map<string, number>();
        for (let i = 0; i < t.length; i++) {
            const count = countMapT.get(t[i]) ?? 0;
            countMapT.set(t[i], count + 1);
        }

        for (const [char, countInS] of countMapS) {
            if (countMapT.get(char) !== countInS) return false;
        }
        return true;
    }
}
