// You are given an array nums of n positive integers and an integer k.
// Initially, you start with a score of 1. You have to maximize your score by applying the following operation at most k times:
// Choose any non-empty subarray nums[l, ..., r] that you haven't chosen previously.
// Choose an element x of nums[l, ..., r] with the highest prime score. If multiple such elements exist, choose the one with the smallest index.
// Multiply your score by x.
// Here, nums[l, ..., r] denotes the subarray of nums starting at index l and ending at the index r, both ends being inclusive.
// The prime score of an integer x is equal to the number of distinct prime factors of x. For example, the prime score of 300 is 3 since 300 = 2 * 2 * 3 * 5 * 5.
// Return the maximum possible score after applying at most k operations.
// Since the answer may be large, return it modulo 109 + 7.

const MOD = 1_000_000_007;
const MAX_N = 1e5 + 1;

const primes: number[] = [];
const isPrime = Array<boolean>(MAX_N).fill(true);

for (let i = 2; i < MAX_N; i++) {
    if (!isPrime[i]) continue;
    primes.push(i);
    for (let j = i * i; j < MAX_N; j += i) {
        isPrime[j] = false;
    }
}

function getPrimeScore(x: number): number {
    let score = 0;
    for (const p of primes) {
        if (p > x) break;
        if (x % p === 0) score++;
    }
    return score;
}

const primeScores = Array.from({ length: MAX_N }, (_, i) => getPrimeScore(i));

function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
    let result = 1n;
    let x = base % mod;
    while (exp > 0) {
        if (exp % 2n === 1n) result = (result * x) % mod;
        x = (x * x) % mod;
        exp /= 2n;
    }
    return result;
}

function maximumScore(nums: number[], k: number): number {
    const n = nums.length;
    const stack: number[] = [-1];
    const countSubarrays = Array<number>(n).fill(0);

    for (let i = 0; i <= n; i++) {
        const currentScore = i < n ? primeScores[nums[i]] : Infinity;

        while (stack.length > 1 && primeScores[nums[stack[stack.length - 1]]] < currentScore) {
            const topIdx = stack.pop()!;
            countSubarrays[topIdx] = (i - topIdx) * (topIdx - stack[stack.length - 1]);
        }
        stack.push(i);
    }

    let result = 1n;
    const indices = nums.map((_, i) => i).sort((a, b) => nums[b] - nums[a]);

    for (const i of indices) {
        const count = Math.min(countSubarrays[i], k);
        result = (result * modPow(BigInt(nums[i]), BigInt(count), BigInt(MOD))) % BigInt(MOD);
        k -= count;
        if (k === 0) break;
    }

    return Number(result);
}
