// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Create a map to store the value and its corresponding index from the array
        unordered_map<int, int> valueToIndexMap;
        int arrayLength = nums.size();

        // Iterate through each element in the array
        for (int index = 0; index < arrayLength; index++) {
            int currentValue = nums[index];
            // Calculate the required value that, when added to currentValue, equals the target
            int requiredValue = target - currentValue;

            // Check if the required value exists in the map
            if (valueToIndexMap.count(requiredValue)) {
                // If it exists, return the indices of the two numbers
                return {valueToIndexMap[requiredValue], index};
            }
            // If not, add the current value and its index to the map
            valueToIndexMap[currentValue] = index;
        }

        // Return {-1, -1} if no solution is found (this line should never be reached as per the problem statement)
        return {-1, -1};
    }
};
