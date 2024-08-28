// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]
 
// Constraints:
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];

    function dfs(openQty, closedQty, currentComb) {
        if (!openQty && !closedQty) {
            res.push(currentComb);
            return;
        }

        if (openQty) {
            dfs(openQty - 1, closedQty, currentComb + "(");
        }

        if (closedQty > openQty) {
            dfs(openQty, closedQty - 1, currentComb + ")");
        }
    }

    dfs(n, n, "");

    return res;
};
