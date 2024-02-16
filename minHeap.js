/* The above class implements a min-heap data structure in JavaScript, allowing for the insertion of
values, extraction of the minimum value, and maintaining the heap property. */
class MinHeap{
  /**
   * The constructor function initializes an empty heap array.
   */
  constructor(){
    this.heap = [];
  }

  
  /**
   * The function calculates the index of the parent node in a binary tree given the index of a child
   * node.
   * @param index - The index parameter represents the index of a node in a binary heap data structure.
   * @returns The parent index of the given index.
   */
  parentIndex(index){
    return Math.floor((index-1)/2);
  }

  /**
   * The function returns the parent element of a given index in a heap.
   * @param index - The index parameter represents the index of a node in a heap data structure.
   * @returns The parent element of the element at the given index in the heap.
   */
  getParent(index){
    return this.heap[this.parentIndex(index)]
  }

  /**
   * The function checks if an element at a given index has a parent element.
   * @param index - The index parameter represents the index of a node in a data structure, such as an
   * array or a binary tree.
   * @returns a boolean value indicating whether the given index has a parent or not.
   */
  hasParent(index){
    return this.parentIndex(index) >= 0;
  }


  /* The `leftIndex(index)` function calculates the index of the left child node given the index of a
  node in the heap. It uses the formula `2*index+1` to calculate the left child index. */
  leftIndex(index){
    return 2*index+1
  }

  /**
   * The function returns the element at the left child index of a given index in a heap.
   * @param index - The index parameter represents the index of a node in a binary heap.
   * @returns The element at the left child index of the given index in the heap.
   */
  getLeft(index){
    return this.heap[this.leftIndex(index)]
  }

  /**
   * The function checks if the left index is less than the length of the heap.
   * @param index - The parameter "index" is not defined in the given code snippet. It seems like it is
   * missing or not used in the provided function.
   * @returns a boolean value indicating whether the left index is less than the length of the heap.
   */
  hasLeft(index){
    return this.leftIndex < this.heap.length;
  }


  /* The `rightIndex(index)` function calculates the index of the right child node given the index of a
  node in the heap. It uses the formula `2*index+2` to calculate the right child index. */
  rightIndex(index){
    return 2*index+2
  }

  /**
   * The function returns the element at the right child index of a given index in a heap.
   * @param index - The parameter "index" represents the index of a node in a binary heap data
   * structure.
   * @returns The element at the right child index of the heap at the given index.
   */
  getRight(index){
    return this.heap[this.rightIndex(index)]
  }

  hasRight(index){
    return this.rightIndex(index) < this.heap.length;
  }

  /**
   * The above function swaps two elements in an array.
   * @param i - The parameter "i" represents the index of the first element in the heap that needs to
   * be swapped.
   * @param j - The parameter "j" represents the index of an element in the heap array.
   */
  swap(i,j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }



  /**
   * The insert function adds a value to the heap and then performs the heapifyUp operation to maintain
   * the heap property.
   * @param value - The value parameter represents the value that you want to insert into the heap.
   */
  insert(value){
    this.heap.push(value);
    this.heapifyUp()
  }


  /**
   * The function `heapifyUp` is used to maintain the heap property by swapping elements upwards until
   * the parent-child relationship is satisfied.
   */
  heapifyUp(){
    let index = this.heap.length-1;
    let parentIndex = this.parentIndex(index)

    while(index > 0 && this.heap[index]<this.heap[parentIndex]){
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parentIndex(index)
    }
  }


  /**
   * The function heapifyDown is used to maintain the min-heap property by recursively swapping
   * elements to their correct positions starting from a given index.
   * @param index - The index parameter represents the index of the element in the heap that needs to
   * be heapified down.
   * @returns The function does not explicitly return anything.
   */
  heapifyDown(index){
    const leftIndex = this.leftIndex(index);
    const rightIndex = this.rightIndex(index);

    let minIndex = index;

    if(this.hasLeft(index) && this.heap[minIndex] > this.heap[leftIndex]){
      minIndex = leftIndex
    }

    if(this.hasRight && this.heap[minIndex] > this.heap[rightIndex]){
      minIndex = rightIndex
    }

    if(minIndex === index){
      return;
    }

    this.swap(minIndex, index);

    this.heapifyDown(minIndex)

  }


  /**
   * The function `extractMin` removes and returns the minimum element from a heap data structure.
   * @returns The minimum value from the heap is being returned.
   */
  extractMin(){

    if(this.heap.length === 0) return null;

    const min = this.heap[0]
    const last = this.heap.pop();

    if(this.heap.length){
      this.heap[0] = last;
      this.heapifyDown(0);
    }

    return min
  }


}

/* The code is creating a new instance of the `MinHeap` class called `heap`. It then inserts several
values (3, 5, 10, 30, 20, 7, 8) into the heap using the `insert` method. After that, it calls the
`extractMin` method to remove and return the minimum value from the heap. Finally, it logs the
current state of the heap to the console using `console.log(heap.heap)`. */
const heap = new MinHeap();

heap.insert(3);
heap.insert(5);
heap.insert(10);
heap.insert(30);
heap.insert(20);
heap.insert(7);
heap.insert(8);

heap.extractMin();

console.log(heap.heap);