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
  
    let rChild = arr[rcIdx] || -Infinity;;
    let lChild = arr[lcIdx] || -Infinity;
  
    while (pIdx < n  && arr[pIdx] < Math.max(rChild, lChild)) {
      rChild = arr[rcIdx] || -Infinity;
      lChild = arr[lcIdx] || -Infinity;
  
      if (arr[pIdx] < Math.max(lChild, rChild)) {
        if (lChild > rChild) {
          [ arr[pIdx], arr[lcIdx] ] = [ arr[lcIdx], arr[pIdx] ];
          pIdx = lcIdx;
        } else {
          [ arr[pIdx], arr[rcIdx] ] = [ arr[rcIdx], arr[pIdx] ];
          pIdx = rcIdx;
        }
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
  
  const arr = [10, 6, 7, 5, 15, 17,12];
  const sortedArr = heapSort(arr);
  
  console.log(sortedArr);
  