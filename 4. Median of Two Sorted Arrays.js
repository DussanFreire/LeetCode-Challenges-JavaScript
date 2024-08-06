// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;
    let maxIndex = isEven ? totalLength / 2 : (Math.ceil(totalLength / 2) - 1);
    let i = 0, j = 0, median1 = 0, median2 = 0;
    if (!nums1.length) return isEven ? (nums2[maxIndex - 1] + nums2[maxIndex]) / 2 : nums2[maxIndex];
    if (!nums2.length) return isEven ? (nums1[maxIndex - 1] + nums1[maxIndex]) / 2 : nums1[maxIndex];
    while (maxIndex >= 0) {
        median1 = median2;
        if (!nums1.length || nums2[0] < nums1[0]) {
            median2 = nums2.shift();
        } else {
            median2 = nums1.shift();
        }
        maxIndex--;
    }

    return isEven ? (median2 + median1) / 2 : median2
};
