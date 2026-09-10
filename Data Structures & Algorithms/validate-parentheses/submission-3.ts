class Solution {
    isValid(s: string): boolean {
        const pairs: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        const stack: string[] = [];

        for (const char of s) {
            if (char in pairs) {
                if (stack.pop() !== pairs[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}