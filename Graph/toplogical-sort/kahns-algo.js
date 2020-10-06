const getInDegreeZero = (adjList) => {
    return Object.keys(adjList).filter(item => {
      return adjList[item] === 0;
    });
  };
  
  const constructInDegree = (adjList) => {
    const inDegreeList = {};
    const keysSpreadedArray = [];
    Object.keys(adjList).map(item => {
      inDegreeList[item] = 0;
      keysSpreadedArray.push(...adjList[item]);
    });
  
    keysSpreadedArray.forEach(item => {
      inDegreeList[item] += 1;
    });
    
    return inDegreeList;
  };
  
  const kahnsAlgo = (adjList, n) => {
    const queue = [];
    const visited = [];
  
    let outDegree = constructInDegree(adjList);
    const inDegreeZeroNodes = getInDegreeZero(outDegree);
  
    queue.push(...inDegreeZeroNodes);
  
    while (queue.length > 0) {
      const item = queue[0];
      
      queue.shift();
      delete adjList[item];
      
      // if (visited.indexOf(item) < 0) visited.push(item);
      visited.push(item);
  
      const zeroIndegreeNodes = getInDegreeZero(constructInDegree(adjList));
      const unAddedNodes = zeroIndegreeNodes.filter(item => queue.indexOf(item) < 0);
      queue.push(...unAddedNodes);
    }
  
    return visited.length !== n ? null : visited;
  }
  
  const adjList = {
    0: [2, 3, 6],
    1: [4],
    2: [6],
    3: [1, 4],
    4: [5, 8],
    5: [],
    6: [7, 11],
    7: [4, 12],
    8: [],
    9: [2, 10],
    10: [6],
    11: [12],
    12: [8],
    13: [],
  };
  
  const visited = kahnsAlgo(adjList, 14);
  console.log(visited);
  
  