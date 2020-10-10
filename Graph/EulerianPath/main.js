class AdjList {
    constructor(n) {
      this.adjList = {};
      this.outDegree = {};
      this.inDegree = {};
  
      for (let i = 0; i < n; i++) {
        this.adjList[i] = [];
      }
    }
  
    insertEdge(u, v) {
      const currentValue = this.adjList[u] || [];
      this.adjList[u] = [...currentValue, v];
      this.getOutDegree();
    }
  
    displayAdjList() {
      console.log(this.getList());
    }
  
    getList() {
      return this.adjList;
    }
  
    getOutDegree() {
      Object.keys(this.adjList).forEach(item => {
        this.outDegree[item] = this.adjList[item].length;
      });
    }
  
    constructIndegree() {
      let nodeSpreadArray = [];
      // Initialization Phase
      Object.keys(this.adjList).map(item => {
        this.inDegree[item] = 0; 
        nodeSpreadArray = [...nodeSpreadArray, ...this.adjList[item]];
      });
  
      nodeSpreadArray.forEach(node => {
        this.inDegree[node] += 1;
      });
    }
  }
  
  const dfs = (adjList, node, visited = []) => {
    if (visited.indexOf(node) > - 1) {
      return;
    }
    visited.push(node);
    const neighbours = adjList[node];
  
    neighbours.forEach(neighbour => {
      if (visited.indexOf(neighbour) < 0) {
        dfs(adjList, neighbour, visited);
      }
    });
  }
  
  const eulerianPath = (adjList, outDegree, node, path) => {
    if (outDegree[node] < 1) {
      return;
    }
  
    const neighbours = adjList[node];
    console.log(node, ' neighbours ', neighbours);
    neighbours.forEach(neighbour => {
      outDegree[node] -= 1;
      eulerianPath(adjList, outDegree, neighbour, path);
    });
  
    path.push(node);
  }
  
  const ePath = (adjList, outDegree, node, path) => {
    while (outDegree[node] !== 0) {
      const neighbours = adjList[node];
      outDegree[node] = outDegree[node] - 1;
      const nextNode = adjList[node][outDegree[node]];
      ePath(adjList, outDegree, nextNode, path);
    }
  
    path.push(node);
  }
  
  const adjList = new AdjList();
  adjList.insertEdge('0', '1');
  adjList.insertEdge('0', '6');
  adjList.insertEdge('1', '2');
  adjList.insertEdge('2', '0');
  adjList.insertEdge('2', '3');
  adjList.insertEdge('3', '4');
  adjList.insertEdge('4', '2');
  adjList.insertEdge('4', '5');
  adjList.insertEdge('5', '0');
  adjList.insertEdge('6', '4');
  
  // Constructing indegree for the graph
  adjList.constructIndegree();
  adjList.displayAdjList();
  
  const outDegree = adjList.outDegree;
  const path = [];
  
  console.log(outDegree);
  // eulerianPath(adjList.adjList, outDegree, '0', path);
  ePath(adjList.adjList, outDegree, '0', path);
  console.log(path.reverse());
  
  
  