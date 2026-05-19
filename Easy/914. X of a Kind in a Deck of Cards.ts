// You are given an integer array deck where deck[i] represents the number written on the ith card.
// Partition the cards into one or more groups such that:
// Each group has exactly x cards where x > 1, and
// All the cards in one group have the same integer written on them.
// Return true if such partition is possible, or false otherwise.

// Example 1:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:
// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

// Constraints:
// 1 <= deck.length <= 104
// 0 <= deck[i] < 104

## 🧠 Intuition

The problem asks if we can group identical cards into piles of equal size $X$, where $X > 1$. 

If we count the frequency of each card, every frequency must be a multiple of this group size $X$. Therefore, for a valid partition to exist, there must be a common divisor greater than 1 that divides all the card frequencies. The largest possible common divisor is the Greatest Common Divisor (GCD). If the GCD of all frequencies is greater than or equal to 2, we can successfully partition the deck.

## 🚀 Approach

1. **Count Frequencies**: Use a hash map (or a fixed-size array since values are bounded) to count the occurrences of each card in the deck.
2. **Find the GCD**: Initialize the global GCD to 0. Iterate through the frequencies of the cards and sequentially calculate the GCD of the current global GCD and the card's frequency.
3. **Verify Constraint**: If at any point the global GCD becomes 1, we can optionally break early since it can never become greater than 1 again.
4. **Final Check**: Return `true` if the final cumulative GCD is greater than or equal to 2, and `false` otherwise.

## ⏱️ Complexity

- **Time complexity:**  
  $$O(N \log M)$$  
  Where $N$ is the number of cards in the deck (to build the frequency map) and $M$ is the maximum frequency of a single card (governing the Euclidean algorithm for GCD calculation).

- **Space complexity:**  
  $$O(K)$$  
  Where $K$ is the number of unique cards in the deck, used to store the frequency map. Given the constraints ($0 \le deck[i] < 10^4$), this scales up to a maximum of $10^4$ unique elements.

## 💻 Code

```typescript
function hasGroupsSizeX(deck: number[]): boolean {
    const counts = new Map<number, number>();
    
    for (const card of deck) {
        counts.set(card, (counts.get(card) || 0) + 1);
    }

    let currentGcd = 0;
    
    for (const count of counts.values()) {
        currentGcd = gcd(currentGcd, count);
        if (currentGcd === 1) {
            return false;
        }
    }

    return currentGcd >= 2;
}

function gcd(a: number, b: number): number {
    while (b > 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
```
