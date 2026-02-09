// Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
// Note: You are not allowed to use any built-in library method to directly solve this problem.

// Example 1:
// Input: num = 26
// Output: "1a"

// Example 2:
// Input: num = -1
// Output: "ffffffff"
 
// Constraints:
// -231 <= num <= 231 - 1

function toHex(num: number): string {
    if (num === 0) return "0";

    const hexChars = "0123456789abcdef";
    let result = "";
    let count = 0;

    while (num !== 0 && count < 8) {
        const digit = num & 0xf;
        result = hexChars[digit] + result;
        num >>>= 4;
        count++;
    }

    return result;
}
