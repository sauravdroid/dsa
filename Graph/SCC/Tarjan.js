class AdjList {
    constructor(n) {
      this.adjList = {};
      for (let i = 0; i < n; i++) {
        this.adjList[i] = [];
      }
    }
  
    insertEdge(u, v) {
      const currentValue = this.adjList[u] || [];
      this.adjList[u] = [...currentValue, v];
    }
  
    displayAdjList() {
      console.log(this.getList());
    }
  
    getList() {
      return this.adjList;
    }
  }
  
  const DFS = (adjList, startNode, visited, nodeIndex, index = 0) => {
  
    if (visited.indexOf(startNode) >= 0 ) {
      return;
    }
  
    nodeIndex[startNode] = index++;
    visited.push(startNode);
  
    const neighbours = adjList[startNode];
  
    neighbours.forEach(neighbour => {
      DFS(adjList, neighbour, visited, nodeIndex, index);
    });
    
    // return {visited, nodeIndex};
  }
  
  const adjList = new AdjList(7);
  
  adjList.insertEdge('0', '2');
  adjList.insertEdge('1', '0');
  adjList.insertEdge('1', '3');
  adjList.insertEdge('2', '1');
  adjList.insertEdge('2', '3');
  adjList.insertEdge('2', '4');
  adjList.insertEdge('3', '5');
  adjList.insertEdge('4', '6');
  adjList.insertEdge('5', '4');
  adjList.insertEdge('5', '6');
  adjList.insertEdge('6', '4');
  
  adjList.displayAdjList();
  
  const visited = [];
  const nodeIndex = {};
  DFS(adjList.getList(), '0', visited, nodeIndex);
  console.log(visited);
  console.log(nodeIndex);