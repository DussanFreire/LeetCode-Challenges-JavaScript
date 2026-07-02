// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

function duplicateZeros(arr: number[]): void {
    const length = arr.length;
    let possibleDuplicates = 0;
    let left = 0;

    // First pass: Find the boundary of elements that will fit in the final array
    while (left + possibleDuplicates < length) {
        if (arr[left] === 0) {
            // If duplicating this zero exceeds the bounds, we can't duplicate it
            if (left + possibleDuplicates === length - 1) {
                arr[length - 1] = 0;
                left--;
                break;
            }
            possibleDuplicates++;
        }
        left++;
    }

    // Adjust left to point to the last valid source index
    let sourceIndex = left - 1;
    let targetIndex = length - 1;

    // Second pass: Copy elements backwards
    while (sourceIndex >= 0) {
        if (arr[sourceIndex] === 0) {
            arr[targetIndex] = 0;
            arr[targetIndex - 1] = 0;
            targetIndex -= 2;
        } else {
            arr[targetIndex] = arr[sourceIndex];
            targetIndex--;
        }
        sourceIndex--;
    }
}
