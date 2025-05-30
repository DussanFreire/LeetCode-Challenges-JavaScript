// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.
// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.
// Return the answers to all queries. If a single answer cannot be determined, return -1.0.
// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.
// Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

// Example 1:
// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation: 
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0

function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][]
): number[] {
    const graph: Map<string, [string, number][]> = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];

        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a)!.push([b, val]);
        graph.get(b)!.push([a, 1 / val]);
    }

    const result: number[] = [];

    for (const [src, dst] of queries) {
        if (!graph.has(src) || !graph.has(dst)) {
            result.push(-1.0);
        } else if (src === dst) {
            result.push(1.0);
        } else {
            const visited: Set<string> = new Set();
            const val = dfs(graph, src, dst, 1, visited);
            result.push(val);
        }
    }

    return result;
}

function dfs(
    graph: Map<string, [string, number][]>,
    current: string,
    target: string,
    product: number,
    visited: Set<string>
): number {
    if (current === target) return product;

    visited.add(current);

    for (const [neighbor, value] of graph.get(current) || []) {
        if (!visited.has(neighbor)) {
            const result = dfs(graph, neighbor, target, product * value, visited);
            if (result !== -1.0) return result;
        }
    }

    return -1.0;
}
