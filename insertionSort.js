/**
 * The `insertion_sort` function takes an array of numbers and sorts it in ascending order using the
 * insertion sort algorithm.
 * @param arr - The `arr` parameter is an array of numbers that you want to sort using the insertion
 * sort algorithm.
 * @returns The function `insertion_sort` returns the sorted array.
 */
const insertion_sort = (arr) => {
  try {
    const len = arr.length;

    if (len === 0) return [];

    for (let i = 1; i < len; i++) {
      const current = arr[i];
      let j = i - 1;

      while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = current;
    }

    return arr;
  } catch (error) {
    return error;
  }
};

//TEST-1
const unsortedArray = [23, 12, 45, 23, 67, 3, 67, 98, 1, 23, 12, 37, 77];

const sortedArray = insertion_sort(unsortedArray); //returns [1,  3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]

console.log(sortedArray); //[1, 3, 12, 12, 23, 23, 23, 37, 45, 67, 67, 77, 98]
