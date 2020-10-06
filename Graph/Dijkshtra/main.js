class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getMax() {
      return this.heap[0];
    }
  
    bubbleDown(pIdx) {
      const n = this.heap.length;
      let lcIdx = 2 * pIdx + 1;
      let rcIdx = 2 * pIdx + 2;
  
      let rChild = this.heap[rcIdx] ? this.heap[rcIdx][1] : Infinity;
      let lChild = this.heap[lcIdx] ? this.heap[lcIdx][1] : Infinity;
  
      while (pIdx < n  && this.heap[pIdx][1] > Math.min(rChild, lChild)) {
  
        rChild = this.heap[rcIdx] ? this.heap[rcIdx][1] : Infinity;
        lChild = this.heap[lcIdx] ? this.heap[lcIdx][1] : Infinity;
  
        if (this.heap[pIdx][1] > Math.min(rChild, lChild)) {
          if (lChild < rChild) {
            [ this.heap[pIdx], this.heap[lcIdx] ] = [ this.heap[lcIdx], this.heap[pIdx] ];
            pIdx = lcIdx;
          } else {
            [ this.heap[pIdx], this.heap[rcIdx] ] = [ this.heap[rcIdx], this.heap[pIdx] ];
            pIdx = rcIdx;
          }
        }
        lcIdx = 2 * pIdx + 1;
        rcIdx = 2 * pIdx + 2;
      }
    }
  
    generateHeap() {
      let current = Math.floor(this.heap.length / 2);
  
      while (current >= 0) {
        this.bubbleDown(current);
        current -= 1;
      }
    }
  
    poll() {
      return this.heap[0];
    }
  
    insert(item) {
      this.heap.push(item);
      this.generateHeap();
    }
  
    delete(node) {
      const index = this.heap.findIndex(item => item[0] === node);
  
      if (index >= 0) {
        this.heap.splice(index, 1);
        this.generateHeap();
      }
    }
  
    update(node, value) {
      const index = this.heap.findIndex(item => item[0] === node);
  
      if (index >= 0) {
        this.heap[index][1] = value;
        this.generateHeap();
      }
    }
  }
  
  const constructPath = (pathObj, destNode) => {
    const keys = Object.keys(pathObj).reverse();
    const path = [destNode];
    let currentNode = pathObj[destNode];
  
    while (currentNode !== null) {
      path.push(currentNode);
      currentNode = pathObj[currentNode];
    }
  
    return path.reverse();
  };
  
  const dijkshtraShortestPath = (adjList, weightList, startNode) => {
    const PQ = new MaxHeap();
    const visited = [];
    const dist = {};
    const prev = {};
  
    Object.keys(adjList).forEach(node => {
      dist[node] = node === startNode ? 0 : Infinity;
    });
  
    Object.keys(adjList).forEach(node => {
      prev[node] = null;
    })
  
    PQ.insert([startNode, 0]);
  
    while(PQ.heap.length > 0) {
      const item = PQ.poll();
      const node = item[0];
      const currentNodeWeght = item[1];
      const isVisited = visited.indexOf(node) >= 0;
  
      if (isVisited) {
        PQ.delete(node);
      } else {
        const neighbours = adjList[node];
        neighbours.forEach((neighbour, weightIndex) => {
          const weight = weightList[node][weightIndex] + currentNodeWeght;
          PQ.insert([neighbour, weight]);
          dist[neighbour] = Math.min(dist[neighbour], weight);
          prev[neighbour] = node;
        });
        visited.push(node);
        PQ.delete(node);
      }
    }
    
    const destNode = visited[visited.length - 1];
    const totalDistance = dist[destNode];
    const path = constructPath(prev, destNode);
  
    return [totalDistance, path];
  };
  
  const maxHeap = new MaxHeap();
  
  
  const adjList = {
    0: ['1', '2'],
    1: ['3'],
    2: ['1', '3'],
    3: ['4'],
    4: [],
  };
  
  const weightList = {
    0: [4, 1],
    1: [1],
    2: [2, 5],
    3: [3],
    4: [],
  };
  
  const dist = dijkshtraShortestPath(adjList, weightList, '0');
  console.log(dist);
  
  
  