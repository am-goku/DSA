# DSA -- Data Structures & Algorithms in JavaScript

A collection of data structures and algorithm implementations in
JavaScript, designed for learning, reference, and interview preparation.

## 📂 Repository Structure

This repo contains clean, modular implementations of many common
algorithms and data structures:

-   `binarySearch.js` -- Binary search on sorted arrays\
-   `linearSearch.js` -- Linear search implementation\
-   Sorting Algorithms:
    -   `bubbleSort.js`\
    -   `insertionSort.js`\
    -   `selectionSort.js`\
    -   `mergeSort.js`\
    -   `quickSort.js`\
    -   `heapSort.js`\
-   Data Structures:
    -   `linkedList.js`\
    -   `stack.js`\
    -   `queue.js`\
    -   `trie.js`\
    -   `hashTable.js`\
    -   `graph.js`\
-   Heaps:
    -   `maxHeap.js`\
    -   `minHeap.js`\
-   `test.js` -- Sample usage and test harness

## ✅ Features

-   Pure JavaScript (ES6+), no dependencies\
-   Clean, readable, and well-commented code\
-   Each module is self-contained and easy to import/use\
-   Perfect for interview prep, learning, or reference

## 🎯 Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/am-goku/DSA.git
cd DSA
```

### 2. Use in Node.js (CommonJS)

``` javascript
const { binarySearch } = require('./binarySearch');

const arr = [1, 2, 3, 4, 5];
const index = binarySearch(arr, 3);
console.log(index); // → 2
```

### 3. Use with ES Modules

``` javascript
import { binarySearch } from './binarySearch.js';

const index = binarySearch([1, 2, 3, 4, 5], 3);
console.log(index); // → 2
```

## 🧪 Testing

Run the included `test.js` file to see examples in action:

``` bash
node test.js
```

You're encouraged to extend the test harness or add a proper testing
framework like Jest or Mocha.

## 🤝 Contributing

Contributions are welcome! Whether it's a new algorithm, bug fix, or
performance improvement:

1.  Fork the repo\

2.  Create a new branch:

    ``` bash
    git checkout -b feature/awesome-algorithm
    ```

3.  Write clean, commented code\

4.  Add/update tests if possible\

5.  Open a Pull Request with a clear description

Please follow the existing code style and prioritize readability.

## 📜 License

This project is open source and free to use, modify, and distribute.\
No specific license file yet --- consider adding an MIT License.

------------------------------------------------------------------------

Happy coding! 🚀\
Found a bug or have a suggestion? Feel free to open an issue!
