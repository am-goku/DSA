function heapSort(arr) {
  buildHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];

    minHeap(arr, 0, i);
  }

  return arr;
}

function buildHeap(arr) {
  const len = arr.length;
  for (let i = Math.floor(len/2)-1; i >=0; i--) {
    minHeap(arr, i, len);
  }
}

function minHeap(arr, index, len) {
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;

  let minIndex = index;

  if (leftIndex < len && arr[leftIndex] > arr[minIndex]) {
    minIndex = leftIndex;
  }

  if (rightIndex < len && arr[rightIndex] > arr[minIndex]) {
    minIndex = rightIndex;
  }

  if (minIndex !== index) {
    [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];

    minHeap(arr, minIndex, len);
  }
}

const unsortedArray = [23, 12, 45, 23, 67, 3, 67, 98, 1, 23, 12, 37, 77];

const sortedArray = heapSort(unsortedArray); //returns [1,  3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]

console.log(sortedArray); //[1, 3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]
