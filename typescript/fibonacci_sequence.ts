// Find the Fibonacci sequence of a number

const fibonacci = (n: number): number[] => {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    const fib: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(1));  // [0]
console.log(fibonacci(4));  // [0, 1, 1, 2]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
