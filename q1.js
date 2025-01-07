function mergeArrays(arr1,arr2,arr3) {
    console.log(...arr1.concat(...arr2).concat(...arr3))
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
