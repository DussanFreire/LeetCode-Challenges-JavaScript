// You are given two positive integers n and k.
// An integer x is called k-palindromic if:
// x is a palindrome.
// x is divisible by k.
// An integer is called good if its digits can be rearranged to form a k-palindromic integer. For example, for k = 2, 2020 can be rearranged to form the k-palindromic integer 2002, whereas 1010 cannot be rearranged to form a k-palindromic integer.
// Return the count of good integers containing n digits.
// Note that any integer must not have leading zeros, neither before nor after rearrangement. For example, 1010 cannot be rearranged to form 101.

// Example 1:
// Input: n = 3, k = 5
// Output: 27
// Explanation:
// Some of the good integers are:
// 551 because it can be rearranged to form 515.
// 525 because it is already k-palindromic.

// Example 2:
// Input: n = 1, k = 4
// Output: 2
// Explanation:
// The two good integers are 4 and 8.

// Example 3:
// Input: n = 5, k = 6
// Output: 2468

// Constraints:
// 1 <= n <= 10
// 1 <= k <= 9

function countGoodIntegers(n: number, k: number): number {
  const uniqueSortedDigitSets = new Set<string>();
  const halfLength = Math.floor((n + 1) / 2);
  const start = 10 ** (halfLength - 1);
  const end = 10 ** halfLength;
  const skipMiddle = n % 2 === 1;

  for (let i = start; i < end; i++) {
    const leftPart = i.toString();
    const rightPart = leftPart
      .split("")
      .reverse()
      .slice(skipMiddle ? 1 : 0)
      .join("");

    const palindromeStr = leftPart + rightPart;
    const palindromeNum = parseInt(palindromeStr, 10);

    if (palindromeNum % k !== 0) continue;

    const sortedDigits = [...palindromeStr].sort().join("");
    uniqueSortedDigitSets.add(sortedDigits);
  }

  const factorials = computeFactorials(n);
  let totalCount = 0n;

  for (const digitKey of uniqueSortedDigitSets) {
    const digitCounts = Array(10).fill(0);
    for (const digit of digitKey) {
      digitCounts[parseInt(digit)]++;
    }

    // Count permutations that do not start with 0
    const validFirstDigits = n - digitCounts[0];
    if (validFirstDigits === 0) continue;

    let permutations = BigInt(validFirstDigits) * factorials[n - 1];
    for (const count of digitCounts) {
      permutations /= factorials[count];
    }

    totalCount += permutations;
  }

  return Number(totalCount);
}

function computeFactorials(upTo: number): bigint[] {
  const result: bigint[] = Array(upTo + 1).fill(1n);
  for (let i = 1; i <= upTo; i++) {
    result[i] = result[i - 1] * BigInt(i);
  }
  return result;
}
