//descending order
const heapSort = (arr) => {
    buildHeap(arr);

    for(let i=arr.length-1; i>0; i--){
        swap(arr, 0, i);

        minHeapify(arr, 0, i)
    };

    return arr;
}

const buildHeap = (arr) => {
    const len = arr.length;

    for (let i = Math.floor(len/2)-1; i >= 0; i--) {
        minHeapify(arr, i, len)        
    }
}

const minHeapify = (arr, index, size) => {
    const left = 2*index+1;
    const right = 2*index+2;
    let minIndex = index;

    if(left < size && arr[left] < arr[minIndex]){
        minIndex = left
    }

    if(right<size && arr[right]< arr[minIndex]){
        minIndex = right;
    }

    if(minIndex !== index) {
        swap(arr, minIndex, index);
        minHeapify(arr, minIndex, size)
    }
}

// ascending order
const maxheapSort = (arr) => {
    buildMaxHeap(arr);

    for(let i=arr.length-1; i>0; i--){
        swap(arr, 0, i);

        maxHeapify(arr, 0, i)
    }


    return arr
}

const buildMaxHeap = (arr) => {
    const len = arr.length;

    for(let i=Math.floor(len/2)-1; i>=0; i--){
        maxHeapify(arr, i, len)
    }
}

const maxHeapify = (arr, index, size) => {
    const left = 2*index+1, right = 2*index+2;
    let maxIndex = index;

    if(left<size && arr[left] > arr[maxIndex]){
        maxIndex = left
    } 

    if(right <size && arr[right] > arr[maxIndex]){
        maxIndex = right
    }

    if(maxIndex !== index){
        swap(arr, index, maxIndex);

        maxHeapify(arr, maxIndex, size)
    }

}

// swap function
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};


const array = [2,4,1,8,34,6,90];

const descArray = heapSort([...array]);

const ascArray = maxheapSort([...array])

console.log(`Ascending -> ${ascArray} \nDescending -> ${descArray}`);