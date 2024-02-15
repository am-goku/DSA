class MinHeap{
  constructor(){
    this.heap = [];
  }

  parentIndex(index){
    return Math.floor((index-1)/2);
  }

  getParent(index){
    return this.heap[this.parentIndex(index)]
  }

  hasParent(index){
    return this.parentIndex(index) >= 0;
  }


  leftIndex(index){
    return 2*index+1
  }

  getLeft(index){
    return this.heap[this.leftIndex(index)]
  }

  hasLeft(index){
    return this.leftIndex < this.heap.length;
  }


  rightIndex(index){
    return 2*index+2
  }

  getRight(index){
    return this.heap[this.rightIndex(index)]
  }

  hasRight(index){
    return this.rightIndex(index) < this.heap.length;
  }

  swap(i,j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }



  insert(value){
    this.heap.push(value);
    this.heapifyUp()
  }


  heapifyUp(){
    let index = this.heap.length-1;
    let parentIndex = this.parentIndex(index)

    while(index > 0 && this.heap[index]<this.heap[parentIndex]){
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parentIndex(index)
    }
  }


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