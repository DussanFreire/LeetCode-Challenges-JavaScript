// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    const expectedValues = []
    let counter1 = 0, counter2 = 0, counter3 = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "{": {
                counter1++;
                expectedValues.push("}")
                break;
            }
            case "}": {
                counter1--;
                if (counter1 === -1 || expectedValues.pop() !== s[i])
                    return false;
                break;
            }
            case "[": {
                expectedValues.push("]")
                counter2++;
                break;
            }
            case "]": {
                counter2--;
                if (counter2 === -1 || expectedValues.pop() !== s[i])
                    return false;
                break;
            }
            case "(": {
                expectedValues.push(")")
                counter3++;
                break;
            }
            case ")": {
                counter3--;
                if (counter3 === -1 || expectedValues.pop() !== s[i])
                    return false;
                break;
            }
        }
    }
    
    return counter1 + counter2 + counter3 === 0 ? true : false;

};
