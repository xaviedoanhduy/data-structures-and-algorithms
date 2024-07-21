// Prime Number

const isPrime = n => {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

const findPrimeSequence = n => {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
};

console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(13)); // true
console.log(findPrimeSequence(2)); // 2
console.log(findPrimeSequence(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
