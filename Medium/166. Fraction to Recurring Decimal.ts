  // Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
  // If the fractional part is repeating, enclose the repeating part in parentheses
  // If multiple answers are possible, return any of them.
  // It is guaranteed that the length of the answer string is less than 104 for all the given inputs.
  // Note that if the fraction can be represented as a finite length string, you must return it.
  
  // Example 1:
  // Input: numerator = 1, denominator = 2
  // Output: "0.5"
  
  // Example 2:
  // Input: numerator = 2, denominator = 1
  // Output: "2"
  
  // Example 3:
  // Input: numerator = 4, denominator = 333
  // Output: "0.(012)"
  
  // Constraints:
  // -231 <= numerator, denominator <= 231 - 1
  // denominator != 0

function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) {
        return "0";
    }

    const isNegative = (numerator < 0) !== (denominator < 0);

    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    const integerPart = Math.floor(num / den);
    let remainder = num % den;

    if (remainder === 0) {
        return (isNegative ? "-" : "") + integerPart.toString();
    }

    let result = (isNegative ? "-" : "") + integerPart.toString() + ".";

    const remainderIndexMap = new Map<number, number>();

    while (remainder !== 0) {
        if (remainderIndexMap.has(remainder)) {
            const cycleStartIndex = remainderIndexMap.get(remainder)!;
            result =
                result.slice(0, cycleStartIndex) +
                "(" +
                result.slice(cycleStartIndex) +
                ")";
            return result;
        }

        remainderIndexMap.set(remainder, result.length);

        remainder *= 10;
        const digit = Math.floor(remainder / den);
        result += digit.toString();
        remainder %= den;
    }

    return result;
}
