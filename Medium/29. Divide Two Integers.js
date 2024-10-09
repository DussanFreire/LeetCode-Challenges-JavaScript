// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.
 
// Constraints:
// -231 <= dividend, divisor <= 231 - 1
// divisor != 0

// const MAX_VAL = 2147483648;

// /**
//  * @param {number} dividend
//  * @param {number} divisor
//  * @return {number}
//  */
// var divide = function (dividend, divisor) {
//     const symb = Math.sign(dividend * divisor), auxDividosor = Math.abs(divisor);
//     let auxDividend = Math.abs(dividend);
//     if (auxDividosor > auxDividend) return 0;
//     if (!auxDividend) return 0;
//     if (auxDividosor === 1) {
//         return transformTo32BitsInt(symb, auxDividend)
//     }
//     let result = 0;
//     while (auxDividend >= auxDividosor) {
//         auxDividend -= auxDividosor;
//         result++;
//     }

//     return transformTo32BitsInt(symb, result);
// };

// function transformTo32BitsInt(symb, result) {
//     if (symb === -1) {
//         return - (result > MAX_VAL ? MAX_VAL : result)
//     }

//     return (result > MAX_VAL - 1 ? MAX_VAL - 1 : result);
// }

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    return parseInt(dividend/divisor) > 2147483647 ? 2147483647 : parseInt(dividend/divisor)
}
