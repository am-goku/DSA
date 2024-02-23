const merge_sort = (arr) => {
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(merge_sort(left), merge_sort(right))
}

const merge = (left , right) => {
    let leftIndex = 0, rightIndex = 0;
    const result = []

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


const unsortedArray = [23, 12, 45, 23, 67, 3, 67, 98, 1, 23, 12, 37, 77];

const sortedArray = merge_sort(unsortedArray); //returns [1,  3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]

console.log(sortedArray); //[1, 3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]