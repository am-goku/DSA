const binary_search = (arr, x) => {
  try {
    const len = arr.length;
    if (len === 0) return false;

    let start = 0,
      end = len - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] === x) return true;

      if (x > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return false;
  } catch (error) {
    return error;
  }
};

const sortedArray = [1, 12, 23, 34, 45, 56, 67, 78, 89, 90];


//TEST-1
const target1 = 34;

const flag1 = binary_search(sortedArray, target1); //returns true
console.log(flag1); //true

//TEST-2
const target2 = 50;

const flag2 = binary_search(sortedArray, target2); //returns false
console.log(flag2); //false
