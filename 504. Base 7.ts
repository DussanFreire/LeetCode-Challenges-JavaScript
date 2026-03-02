// Given an integer num, return a string of its base 7 representation.

// Example 1:
// Input: num = 100
// Output: "202"

// Example 2:

// Input: num = -7
// Output: "-10"

// Constraints:
// -107 <= num <= 107

function convertToBase7(num: number): string {
    if (num === 0) return "0";

    const isNegative = num < 0;
    let value = Math.abs(num);
    const digits: string[] = [];

    while (value > 0) {
        digits.push(String(value % 7));
        value = Math.floor(value / 7);
    }

    const result = digits.reverse().join("");

    return isNegative ? "-" + result : result;
}
