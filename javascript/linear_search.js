// Linear Search

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) 
            return i;
    }
    return -1;
}

const arr = [-5, 2, 10, 4, 6];
console.log(linearSearch(arr, -5)); // 0
console.log(linearSearch(arr, 10)); // 2
console.log(linearSearch(arr, 6)); // 4
console.log(linearSearch(arr, 20)); // -1
