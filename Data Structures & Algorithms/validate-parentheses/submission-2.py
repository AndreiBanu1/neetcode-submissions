class Solution:

    p_dict = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    def isValid(self, s: str) -> bool:
        stack = []

        for char in s:
            if char in self.p_dict:
                stack.append(char)
            else:
                if not stack:
                    return False

                last_open = stack.pop()

                if self.p_dict[last_open] != char:
                    return False

        return len(stack) == 0