// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.
// A boomerang is a set of three points that are all distinct and not in a straight line.

// Example 1:
// Input: points = [[1,1],[2,3],[3,2]]
// Output: true
// Example 2:
// Input: points = [[1,1],[2,2],[3,3]]
// Output: false

// Constraints:
// points.length == 3
// points[i].length == 2
// 0 <= xi, yi <= 100

function isBoomerang(points: number[][]): boolean {
    const [p1, p2, p3] = points;

    const dx1 = p2[0] - p1[0];
    const dy1 = p2[1] - p1[1];
    
    const dx2 = p3[0] - p1[0];
    const dy2 = p3[1] - p1[1];

    return dx1 * dy2 !== dy1 * dx2;
}
