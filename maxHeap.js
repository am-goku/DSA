/* The MaxHeap class implements a max heap data structure in JavaScript, allowing for insertion,
extraction of the maximum value, and maintaining the heap property. */
class MaxHeap{
   /**
    * The constructor function initializes an empty heap array.
    */
    constructor(){
        this.heap = []
    }

    /* The `parentIndex(i)` function calculates the index of the parent node of a node at index `i` in
    the heap. It uses the formula `(i-1)/2` to calculate the index. */
    parentIndex(i){
        return Math.floor((i-1)/2)
    }

    hasParent(i){
        return this.parentIndex(i) >=0;
    }

    getParent(i){
        return this.heap[this.parentIndex(i)]
    }

    /* The `leftIndex(i)` function calculates the index of the left child of a node at index `i` in the
    heap. It uses the formula `2*i + 1` to calculate the index. */
    leftIndex(i){
        return 2*i+1;
    }

    hasLeft(i){
        return this.leftIndex(i) < this.heap.length;
    }

    getLeft(i){
        return this.heap[this.leftIndex(i)]
    }

    /* The `rightIndex(i)` function calculates the index of the right child of a node at index `i` in the
    heap. It uses the formula `2*i + 2` to calculate the index. */
    rightIndex(i){
        return 2*i+2;
    }
    
    hasRight(i){
        return this.rightIndex(i) < this.heap.length;
    }

    getRight(i){
        return this.heap[this.rightIndex(i)]
    }

    /**
     * The function swaps the elements at indices i and j in the heap array.
     * @param i - The parameter "i" represents the index of the first element in the heap that needs to
     * be swapped.
     * @param j - The parameter "j" represents the index of an element in the heap array that we want
     * to swap with another element.
     */
    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }


    /**
     * The function `heapifyUp` is used to maintain the heap property by moving a newly inserted
     * element up the heap until it is in the correct position.
     */
    heapifyUp(){
        let index = this.heap.length-1;
        let parentIndex = this.parentIndex(index)
        while(this.hasParent(index) && this.heap[parentIndex] < this.heap[index]){
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.parentIndex(index)
        }
    }

    /**
     * The function heapifyDown is used to maintain the heap property by comparing the value at the
     * given index with its left and right child nodes and swapping if necessary.
     * @param index - The `index` parameter represents the index of the element in the heap that needs
     * to be heapified down.
     */
    heapifyDown(index){
        const leftIndex = this.leftIndex(index);
        const rightIndex = this.rightIndex(index);

        let minIndex = index;

        if(this.heap[minIndex] < this.heap[leftIndex]){
            minIndex = leftIndex
        }

        if(this.heap[minIndex] < this.heap[rightIndex]){
            minIndex = rightIndex
        }

        if(minIndex !== index){
            this.swap(index, minIndex);
            this.heapifyDown(minIndex);
        }
    }


    /**
     * The insert function adds a value to the heap and then performs the heapifyUp operation to
     * maintain the heap property.
     * @param value - The value parameter represents the value that you want to insert into the heap.
     */
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    /**
     * The function "extractMax" extracts the maximum value from a heap data structure and reorganizes
     * the heap to maintain its properties.
     * @returns The maximum value from the heap.
     */
    extractMax(){
        const max = this.heap[0];

        const last = this.heap.pop();

        this.heap[0] = last;

        this.heapifyDown(0)

        return max;
    }

}




/* The code is creating a new instance of the `MaxHeap` class called `heap`. It then inserts several
values (3, 5, 10, 30, 20, 7, 8) into the heap using the `insert` method. After that, it calls the
`extractMax` method to remove the maximum value from the heap. Finally, it logs the current state of
the heap to the console using `console.log(heap.heap)`. */
const heap = new MaxHeap();

heap.insert(3);
heap.insert(5);
heap.insert(10);
heap.insert(30);
heap.insert(20);
heap.insert(7);
heap.insert(8);

heap.extractMax();

console.log(heap.heap);