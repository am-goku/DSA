class minHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  hasLeft(index) {
    return this.getLeftIndex(index) < this.heap.length;
  }

  getRightIndex(index) {
    return 2 * index + 2;
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
      this.heap[index1],
      this.heap[index2],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);

      index = this.getParentIndex(index);
    }
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

const heap = new minHeap();

heap.insert(3);
heap.insert(5);
heap.insert(10);
heap.insert(30);
heap.insert(20);
heap.insert(7);
heap.insert(8);

heap.printHeap();

console.log(heap.heap);
