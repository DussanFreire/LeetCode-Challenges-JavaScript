// You are given an integer n. There is an undirected graph with n vertices, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting vertices ai and bi.
// Return the number of complete connected components of the graph.
// A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.
// A connected component is said to be complete if there exists an edge between every pair of its vertices.

// Example 1:
// Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
// Output: 3
// Explanation: From the picture above, one can see that all of the components of this graph are complete.

// Example 2:
// Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
// Output: 1
// Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1.


const getCompleteGraphEdgeCount = (nodes: number): number => (nodes * (nodes - 1)) / 2;

function countCompleteComponents(n: number, edges: number[][]): number {
    const parent = Array.from({ length: n }, (_, i) => i);
    const size = new Array(n).fill(1);
    const edgeCount = new Array(n).fill(0);
    let completeComponents = 0;

    function find(node: number): number {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }
        return parent[node];
    };

    function union(node1: number, node2: number): void {
        const root1 = find(node1);
        const root2 = find(node2);

        if (root1 === root2) {
            edgeCount[root1]++;
            return;
        }

        if (size[root1] > size[root2]) {
            parent[root2] = root1;
            size[root1] += size[root2];
            edgeCount[root1] += edgeCount[root2] + 1;
        } else {
            parent[root1] = root2;
            size[root2] += size[root1];
            edgeCount[root2] += edgeCount[root1] + 1;
        }
    };

    for (const [u, v] of edges) {
        union(u, v);
    }

    for (let i = 0; i < n; i++) {
        if (parent[i] === i && edgeCount[i] === getCompleteGraphEdgeCount(size[i])) {
            completeComponents++;
        }
    }

    return completeComponents;
}
