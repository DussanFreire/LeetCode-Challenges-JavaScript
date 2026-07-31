// 1287. Element Appearing More Than 25% In Sorted Array
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 105
function findSpecialInteger(arr: number[]): number {
    const threshold = Math.floor(arr.length / 4);
    
    for (let i = 0; i < arr.length - threshold; i++) {
        if (arr[i] === arr[i + threshold]) {
            return arr[i];
        }
    }
    
    return -1;
}
