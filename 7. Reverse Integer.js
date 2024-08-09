// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let value = Math.abs(x)
    if (2147483648 <= value) return 0;
    let reversedNumber = 0;
    while (value) {
        const newDigit = value % 10;
        reversedNumber = reversedNumber * 10 + newDigit
        value = Math.floor(value / 10)
    }
    if (2147483648 <= reversedNumber) return 0;
    return (x < 0 ? -1 : 1) * reversedNumber;
};
