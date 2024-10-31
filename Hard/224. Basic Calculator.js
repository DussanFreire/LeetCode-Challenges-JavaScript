// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:
// Input: s = "1 + 1"
// Output: 2

// Example 2:
// Input: s = " 2-1 + 2 "
// Output: 3

// Example 3:
// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Constraints:
// 1 <= s.length <= 3 * 10^5
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
// '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
// '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
// There will be no two consecutive operators in the input.
// Every number and running calculation will fit in a signed 32-bit integer.

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let number = 0;
    let signValue = 1;
    let result = 0;
    let operationsStack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (!isNaN(parseInt(c))) {
            number = number * 10 + parseInt(c);
        } else if (c === '+' || c === '-') {
            result += number * signValue;
            signValue = (c === '-') ? -1 : 1;
            number = 0;
        } else if (c === '(') {
            operationsStack.push(result);
            operationsStack.push(signValue);
            result = 0;
            signValue = 1;
        } else if (c === ')') {
            result += signValue * number;
            result *= operationsStack.pop();
            result += operationsStack.pop();
            number = 0;
        }
    }

    return result + number * signValue;
};
