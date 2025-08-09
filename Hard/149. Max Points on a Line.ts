// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Example 1:
// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3

// Example 2:
// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

// Constraints:
// 1 <= points.length <= 300
// points[i].length == 2
// -104 <= xi, yi <= 104
// All the points are unique.

function maxPoints(points: number[][]): number {
    if (points.length <= 2) return points.length;

    let maxPointsOnLine = 0;

    for (let i = 0; i < points.length; i++) {
        const slopes = new Map<string, number>();
        let duplicates = 0;
        let localMax = 0;

        for (let j = i + 1; j < points.length; j++) {
            const dx = points[j][0] - points[i][0];
            const dy = points[j][1] - points[i][1];

            if (dx === 0 && dy === 0) {
                duplicates++;
                continue;
            }

            const gcdVal = gcd(dx, dy);
            const normDx = dx / gcdVal;
            const normDy = dy / gcdVal;
            const slopeKey = `${normDx}/${normDy}`;

            slopes.set(slopeKey, (slopes.get(slopeKey) || 0) + 1);
            localMax = Math.max(localMax, slopes.get(slopeKey)!);
        }

        maxPointsOnLine = Math.max(maxPointsOnLine, localMax + duplicates + 1);
    }

    return maxPointsOnLine;
}

function gcd(a: number, b: number): number {
    if (b === 0) return a;
    
    return gcd(b, a % b);
}
