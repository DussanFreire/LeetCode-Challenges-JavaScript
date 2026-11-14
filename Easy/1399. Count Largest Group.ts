// 1399. Count Largest Group
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer n.

// We need to group the numbers from 1 to n according to the sum of its digits. For example, the numbers 14 and 5 belong to the same group, whereas 13 and 3 belong to different groups.

// Return the number of groups that have the largest size, i.e. the maximum number of elements.

 

// Example 1:

// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.
// Example 2:

// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.
 

// Constraints:

function countLargestGroup(n: number): number {
  const digitSumCounts = new Array<number>(37).fill(0);
  let maxGroupSize = 0;
  let largestGroupCount = 0;

  for (let num = 1; num <= n; num++) {
    const sum = getDigitSum(num);
    digitSumCounts[sum]++;

    if (digitSumCounts[sum] > maxGroupSize) {
      maxGroupSize = digitSumCounts[sum];
      largestGroupCount = 1;
    } else if (digitSumCounts[sum] === maxGroupSize) {
      largestGroupCount++;
    }
  }

  return largestGroupCount;
}

function getDigitSum(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
