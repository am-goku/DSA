const selection_sort = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

const unsortedArray = [23, 12, 45, 23, 67, 3, 67, 98, 1, 23, 12, 37, 77];

const sortedArray = selection_sort(unsortedArray); //returns [1,  3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]

console.log(sortedArray); //[1, 3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]
