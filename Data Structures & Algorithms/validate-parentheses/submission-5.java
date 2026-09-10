class Solution {

    private final Map<Character, Character> pMap = Map.of(
        '(', ')',
        '[', ']',
        '{', '}'
    );

    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for (char ch : s.toCharArray()) {
            if (pMap.containsKey(ch)) {
                stack.push(ch);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }

                char lastOpen = stack.pop();

                if (pMap.get(lastOpen) != ch) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
}