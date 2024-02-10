/**
 * The bubble_sort function takes an array of numbers and sorts them in ascending order using the
 * bubble sort algorithm.
 * @param arr - The `arr` parameter is an array of numbers that you want to sort using the bubble sort
 * algorithm.
 * @returns The function `bubble_sort` returns the sorted array.
 */
const bubble_sort = (arr) => {
  try {
    const len = arr.length;

    if (len === 0) return [];

    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }

    return arr;
  } catch (error) {
    return error;
  }
};

//TEST-1
const unsortedArray = [23, 12, 45, 23, 67, 3, 67, 98, 1, 23, 12, 37, 77];

const sortedArray = bubble_sort(unsortedArray); //returns [1,  3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]

console.log(sortedArray); //[1, 3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]
