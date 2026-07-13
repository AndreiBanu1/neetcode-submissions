class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            } else {
                i++;
                j--;
            }
        }
        return true;
    }
}
