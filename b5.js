function getLength(arr) {
    let count = 0;
    //đệ quy
    for(let x of arr) {
        if(Array.isArray(x)) {
            count += getLength(x);
        } else {
            count++;
        }
    }

    return count;
}

console.log(getLength([1, [2, 3]])); // ➞ 3
console.log(getLength([1, [2, [3, 4]]])) // ➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) // ➞ 6
console.log(getLength([1, [2], 1, [2], 1])); // ➞ 5
