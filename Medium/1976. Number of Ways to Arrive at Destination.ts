// You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.
// You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.
// Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 109 + 7.

// Example 1:
// Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
// Output: 4
// Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
// The four ways to get there in 7 minutes are:
// - 0 ➝ 6
// - 0 ➝ 4 ➝ 6
// - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
// - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6

// Example 2:
// Input: n = 2, roads = [[1,0,10]]
// Output: 1
// Explanation: There is only one way to go from intersection 0 to intersection 1, and it takes 10 minutes.

const MOD = 1_000_000_007;

function countPaths(n: number, roads: number[][]): number {
    const graph = createGraph(roads);
    const minHeap = createMinHeap();
    const ways = createWays(n);
    const dist = createDist(n);

    while (minHeap.size() > 0) {
        const [currDist, node] = minHeap.pop()!;

        if (currDist > dist[node]) continue;

        for (const [neighbor, weight] of graph.get(node) || []) {
            const newDist = currDist + weight;

            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                ways[neighbor] = ways[node];
                minHeap.push([newDist, neighbor]);
            } else if (newDist === dist[neighbor]) {
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }

    return ways[n - 1];
}

function createDist(n: number): number[] {
    const dist = new Array(n).fill(Infinity);
    dist[0] = 0;

    return dist;
}


function createWays(n: number): number[] {
    const ways = new Array(n).fill(Infinity);
    ways[0] = 1;

    return ways;
}

function createGraph(roads: number[][]): Map<number, [number, number][]> {
    const graph = new Map<number, [number, number][]>();

    for (const [u, v, w] of roads) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u)!.push([v, w]);
        graph.get(v)!.push([u, w]);
    }

    return graph;
}

function createMinHeap(): MinHeap<[number, number]> {
    const minHeap = new MinHeap<[number, number]>((a, b) => a[0] - b[0]);
    minHeap.push([0, 0]);

    return minHeap;
}

class MinHeap<T> {
    private heap: T[] = [];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    push(value: T): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop(): T | undefined {
        if (this.size() === 0) return undefined;
        this.swap(0, this.heap.length - 1);
        const item = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    size(): number {
        return this.heap.length;
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[index], this.heap[parentIndex]) >= 0) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    private heapifyDown(): void {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let smallerChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[smallerChildIndex]) < 0) {
                smallerChildIndex = rightChildIndex;
            }
            if (this.comparator(this.heap[index], this.heap[smallerChildIndex]) <= 0) break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
