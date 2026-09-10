func isValid(s string) bool {
	pMap := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	stack := []rune{}

	for _, ch := range s {
		if _, exists := pMap[ch]; exists {
			stack = append(stack, ch)
		} else {
			if len(stack) == 0 {
				return false
			}

			lastOpen := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			if pMap[lastOpen] != ch {
				return false
			}
		}
	}

	return len(stack) == 0
}