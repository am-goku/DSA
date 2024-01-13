class MinHeap {
    constructor() {
        this.heap = [];
    };


    getParentIndex(index) {
        return Math.floor((index-1)/2);
    };

    getLeftIndex(index) {
        return 2*index + 1;
    }

    getRightIndex(index) {
        return 2*index + 2;
    }

    hasLeft(index) {
        return this.getLeftIndex(index) < this.heap.length;
    }

    hasRight(index) {
        return this.getRightIndex(index) < this.heap.length
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    parent (index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2) {
        const temp = this.heap[index1];

        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }


    insert(value) {
        this.heap.push(value);
        this.heapifyUp()
    }



    heapifyUp(){
        let index = this.heap.length-1;

        while(this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index)

            index = this.getParentIndex(index);
        }
    }


    heapifyDown() {
        let index = 0;


        while(this.hasLeft(index)){
            let minIndex = this.getLeftIndex(index);

            if(this.hasRight(index) && this.heap[this.getRightIndex(index)] < this.heap[this.getLeftIndex(index)]){
                minIndex = this.getRightIndex(index)
            }

            if(this.heap[index] < this.heap[minIndex]){
                break;
            } else {
                this.swap(index, minIndex);
            }

            index = minIndex;
        }

    }


    exteactMin(){
        if(this.heap.length === 0){
            return null
        }

        if(this.heap.length === 1){
            this.heap.pop();
            return
        }


        this.heap[0] = this.heap.pop();

        this.heapifyDown();
    }
}


const heap = new MinHeap();

heap.insert(10)
heap.insert(4)
heap.insert(1)
heap.insert(30)
heap.insert(20)
heap.insert(0)
heap.insert(2)

heap.exteactMin()

// heap.heapifyDown()

console.log(...heap.heap);
// printHeapInOrder(heap)