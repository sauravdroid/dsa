class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getMin() {
      this.heap[0];
    }
  
    insert(node) {
      this.heap.push(node);
      let current = this.heap.length - 1;
  
      while (current > 0 && this.heap[current] < this.heap[Math.floor(current / 2)]) {
        [
          this.heap[current], 
          this.heap[Math.floor(current / 2)]
        ] = [
          this.heap[Math.floor(current / 2)], 
          this.heap[current]
        ];
        current = Math.floor(current / 2);
      }
    }
  
    displayHeap() {
      for (let i = 0; i < this.heap.length; i++) {
        console.log(this.heap[i]);
      }
    }
  
    remove() {
      if (this.heap.length <= 3) {
        this.heap.shift();
        if (this.heap.length === 2) {
          if (this.heap[0] > this.heap[1]) {
            [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
          }
        }
      } else {
        // Swap first and last element
        [
          this.heap[0],
          this.heap[this.heap.length - 1]
        ] = [
          this.heap[this.heap.length - 1],
          this.heap[0]
        ];
        this.heap.pop();
        let current = 0;
        let leftChild = (current * 2) + 1;
        let rightChild = (current * 2) + 2;
        const n = this.heap.length;
  
        console.log('Left Child ', this.heap[leftChild]);
        console.log('Right Child ', this.heap[rightChild]);
  
        while(
          this.heap[current] > Math.min(this.heap[leftChild], this.heap[rightChild])
          && leftChild < n
          && rightChild < n
        ) {
          // Swap with the lesser node
          if (this.heap[leftChild] < this.heap[rightChild]) {
            [this.heap[current], this.heap[leftChild]] = [this.heap[leftChild], this.heap[current]];
            current = leftChild;
          } else {
            [this.heap[current], this.heap[rightChild]] = [this.heap[rightChild], this.heap[current]];
            current = rightChild;
          }
  
          leftChild = 2 * current + 1;
          rightChild = 2 * current + 1;
        }
  
      }
    }
  }
  
  const minHeap = new MinHeap();
  minHeap.insert(10);
  minHeap.insert(23);
  minHeap.insert(36);
  minHeap.insert(18);
  minHeap.insert(5);
  minHeap.insert(12);
  minHeap.insert(24);
  minHeap.displayHeap();
  console.log('----------------');
  minHeap.remove();
  minHeap.displayHeap();
  
  
  

  const createMaxHeap = arr => {
    let current = Math.floor(arr.length / 2);
  
    while (current >= 0) {
      bubbleDown(arr, current);
      current -= 1;
    }
  };
  
  const bubbleDown = (arr, pIdx) => {
    const n = arr.length;
    let lcIdx = 2 * pIdx + 1;
    let rcIdx = 2 * pIdx + 2;
  
    while (
      pIdx < n  
      && arr[pIdx] < Math.max(arr[rcIdx] || -Infinity, arr[lcIdx] || -Infinity)
    ) {
      rChild = arr[rcIdx] || -Infinity;
      lChild = arr[lcIdx] || -Infinity;

      if (lChild > rChild) {
        [ arr[pIdx], arr[lcIdx] ] = [ arr[lcIdx], arr[pIdx] ];
        pIdx = lcIdx;
      } else {
        [ arr[pIdx], arr[rcIdx] ] = [ arr[rcIdx], arr[pIdx] ];
        pIdx = rcIdx;
      }
      
      lcIdx = 2 * pIdx + 1;
      rcIdx = 2 * pIdx + 2;
    }
  }
  
  const heapSort = arr => {
    createMaxHeap(arr);
  
    const sortedArr = [];
  
    while (arr.length > 0) {
      const n = arr.length - 1;
  
      [ arr[0], arr[n] ] = [ arr[n], arr[0] ];
      const item = arr.pop();
      sortedArr.push(item);
      bubbleDown(arr, 0);
    }
  
    return sortedArr;
  }

  const kthSmallestElement = (arr, k) => {
    const nArr = [];

    for (let i = 0; i < arr.length; i++) {

      if (nArr.length < k) {
        nArr.push(arr[i]);
      } 
      
      else if (arr[i] < nArr[0]) {
        nArr.shift();
        nArr.push(arr[i]);
      }

      createMaxHeap(nArr);

    }

    return nArr;
  };
  
  const arr = [10, 6, 7, 5, 15, 17,12];
  // const nArr = kthSmallestElement(arr, 3);
  createMaxHeap(arr);
  
  console.log(arr);
  