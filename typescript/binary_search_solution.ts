// Binary Search Solution

const binarySearch = (arr: number[], target: number): number => {
    let leftIndex: number = 0;
    let rightIndex: number = arr.length - 1;
    
    while (leftIndex <= rightIndex) {
        let middleIndex: number = Math.floor((leftIndex + rightIndex) / 2);
        
        if (target === arr[middleIndex]) 
            return middleIndex;
        
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    
    return -1;
}

const arr: number[] = [-5, 2, 10, 4, 6];
const sortedArr: number[] = [...arr].sort((a, b) => a - b);

console.log(binarySearch(sortedArr, -5)); // 0
console.log(binarySearch(sortedArr, 10)); // 4
console.log(binarySearch(sortedArr, 6));  // 3
console.log(binarySearch(sortedArr, 20)); // -1
