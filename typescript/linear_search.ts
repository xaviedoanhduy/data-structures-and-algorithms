// Linear Search

const linearSearch = (arr: number[], target: number) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) 
            return i;
    }
    return -1;
}

const arrNums: number[] = [-5, 2, 10, 4, 6];
console.log(linearSearch(arrNums, -5)); // 0
console.log(linearSearch(arrNums, 10)); // 2
console.log(linearSearch(arrNums, 6)); // 4
console.log(linearSearch(arrNums, 20)); // -1