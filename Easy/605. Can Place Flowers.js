// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    if (flowerbed.length === 0) return false;

    let possiblePlots = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const { prevPlot, nextPlot, currentPlot } = getPotsValues(flowerbed, i);

        if (isAValidPlotPlace(prevPlot, nextPlot, currentPlot)) {
            possiblePlots++;
            flowerbed[i] = 1;
            if (possiblePlots >= n) {
                return true;
            }
        }
    }

    return possiblePlots >= n;
};

function getPotsValues(flowerbed, index) {
    const prevPlot = flowerbed[index - 1] || 0;
    const nextPlot = flowerbed[index + 1] || 0;
    const currentPlot = flowerbed[index];

    return { prevPlot, nextPlot, currentPlot }
}

function isAValidPlotPlace(prevPlot, nextPlot, currentPlot) {
    return prevPlot === 0 && nextPlot === 0 && currentPlot !== 1;
}
