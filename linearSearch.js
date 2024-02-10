/**
 * The linear_search function takes an array and a target value as input and returns true if the target
 * value is found in the array, and false otherwise.
 * @param arr - The `arr` parameter is an array that represents the list of elements in which we want
 * to search for a specific value. In the given code, the `arr` parameter is assigned the value of
 * `unsortedArray`, which is an array containing a list of numbers.
 * @param x - The parameter `x` in the `linear_search` function represents the element that you want to
 * search for in the array `arr`.
 * @returns The code is returning the result of the linear search algorithm. It returns `true` if the
 * target element is found in the array, and `false` otherwise.
 */
const linear_search = (arr, x) => {
  try {
    const len = arr.length;

    if (len === 0) return false;

    for (let i = 0; i < len; i++) {
      if (arr[i] === x) return true;
    }

    return false;
  } catch (error) {
    return error;
  }
};

const unsortedArray = [23, 12, 45, 23, 67, 3, 67, 98, 1, 23, 12, 37, 77];

//TEST-1
const target1 = 23;

const flag1 = linear_search(unsortedArray, target1); //returns true
console.log(flag1); //true

//TEST-2
const target2 = 50;

const flag2 = linear_search(unsortedArray, target2); //returns false
console.log(flag2); //false
