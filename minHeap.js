class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeft(index) {
    return this.getLeftIndex(index) < this.heap.length;
  }

  hasRight(index) {
    return this.getRightIndex(index) < this.heap.length;
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  left(index) {
    return this.heap[this.getLeftIndex(index)];
  }

  right(index) {
    return this.heap[this.getRightIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(index, this.getParentIndex(index));

      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;

    while (this.hasLeft(index)) {
      let minIndex = this.getLeftIndex(index);

      if (this.hasRight && this.right(index) < this.heap[minIndex]) {
        minIndex = this.getRightIndex(index);
      }

      if (this.heap[index] < this.heap[minIndex]) {
        break;
      } else {
        this.swap(index, minIndex);

        index = minIndex;
      }
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    let len = this.heap.length;

    if (len === 0) {
      return null;
    }

    if (len === 1) {
      this.heap.pop();
      return;
    }

    this.heap[0] = this.heap.pop();
    this.heapifyDown();
  }

  printHeap() {
    const levels = Math.ceil(Math.log2(this.heap.length + 1));
    let currentIndex = 0;

    for (let i = 0; i < levels; i++) {
      let levelString = "";

      for (let j = 0; j < 2 ** i && currentIndex < this.heap.length; j++) {
        levelString += this.heap[currentIndex] + " ".repeat(3);
        currentIndex++;
      }

      console.log(levelString);
    }
  }
}

const heap = new MinHeap();

heap.insert(3);
heap.insert(5);
heap.insert(10);
heap.insert(30);
heap.insert(20);
heap.insert(7);
heap.insert(8);

heap.extractMin();

heap.printHeap();

console.log(heap.heap);