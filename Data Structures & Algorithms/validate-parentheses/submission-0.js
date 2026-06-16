class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const brackets = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
    }

    for (let char of s) {
        if (brackets[char]) {
            stack.push(char)
        }else {
            const top = stack.pop()

            if(!top || brackets[top] !== char) {
                return false
            }
        }
    }
    return stack.length === 0;
    }
}
