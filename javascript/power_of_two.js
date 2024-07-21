// Power of two

const isPowerOfTwoBitWise = n => {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
}

const powerOfTwo = n => {
    let power = 0;
    if (isPowerOfTwoBitWise(n)){
        power += Math.log2(n)
        return `2^${power}`
    }
    return "No power of two"
}

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(5)); // false
console.log(isPowerOfTwoBitWise(5)); // false
console.log(isPowerOfTwoBitWise(8)); // true
console.log(powerOfTwo(1)); // 2^0
console.log(powerOfTwo(7)); // No power of two
console.log(powerOfTwo(8)); // 2^3
