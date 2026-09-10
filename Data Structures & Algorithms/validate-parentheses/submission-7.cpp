#include <stack>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    bool isValid(string s) {
        unordered_map<char, char> pMap = {
            {'(', ')'},
            {'[', ']'},
            {'{', '}'}
        };

        stack<char> st;

        for (char ch : s) {
            if (pMap.contains(ch)) {
                st.push(ch);
            } else {
                if (st.empty()) {
                    return false;
                }

                char lastOpen = st.top();
                st.pop();

                if (pMap[lastOpen] != ch) {
                    return false;
                }
            }
        }

        return st.empty();
    }
};