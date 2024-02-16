const quick_sort = (arr) => {

    if(arr.length <= 1) return arr;

    const pivot = arr[0]

    const left = [], right = [];

    let i=1;

    while(i<arr.length){
        if(arr[i]<pivot){
            left.push(arr[i])
        }

        if(arr[i] >= pivot){
            right.push(arr[i])
        }

        i++;
    }


    return [...quick_sort(left), pivot, ...quick_sort(right)];
}


const unsortedArray = [23, 12, 45, 23, 67, 3, 67, 98, 1, 23, 12, 37, 77];

const sortedArray = quick_sort(unsortedArray); //returns [1,  3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]

console.log(sortedArray); //[1, 3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]