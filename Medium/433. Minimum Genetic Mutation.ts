// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.
// Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.
// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.
// Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.
// Note that the starting point is assumed to be valid, so it might not be included in the bank.

// Example 1:
// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1

// Example 2:
// Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// Output: 2

// Constraints:
// 0 <= bank.length <= 10
// startGene.length == endGene.length == bank[i].length == 8
// startGene, endGene, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].

function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const bankSet = new Set(bank);

    if (!bankSet.has(endGene)) return -1;

    const chars = ['A', 'C', 'G', 'T'];
    const queue: [string, number][] = [[startGene, 0]];
    const visited = new Set<string>([startGene]);

    while (queue.length > 0) {
        const [gene, steps] = queue.shift()!;

        if (gene === endGene) return steps;

        for (let i = 0; i < gene.length; i++) {
            for (const c of chars) {
                if (c === gene[i]) continue;
                
                const mutated = gene.slice(0, i) + c + gene.slice(i + 1);

                if (bankSet.has(mutated) && !visited.has(mutated)) {
                    visited.add(mutated);
                    queue.push([mutated, steps + 1]);
                }
            }
        }
    }

    return -1;
}
