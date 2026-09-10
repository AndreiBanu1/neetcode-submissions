class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    pMap = new Map<string, string>([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"],
    ]);
    isValid(s: string): boolean {
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (this.pMap.has(char)) {
                stack.push(char);
            } else {
                const lastOpen = stack.pop();
                if (lastOpen === undefined) return false;
                if (this.pMap.get(lastOpen) !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
