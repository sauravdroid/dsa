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
      
      visited.push(item);
  
      const zeroIndegreeNodes = getInDegreeZero(constructInDegree(adjList));
      const unAddedNodes = zeroIndegreeNodes.filter(item => queue.indexOf(item) < 0);
      queue.push(...unAddedNodes);
    }
  
    return visited.length !== n ? null : visited;
  }
  
  
  const singleSourceShortestPath = (adjList, weightList, n) => {
    const visitOrder = kahnsAlgo({...adjList}, n);
    const distanceObj = {};

    visitOrder.forEach((item, index) => {
      if (index === 0) {
        distanceObj[item] = 0;
      } else {
        distanceObj[item] = Infinity;
      }
    });

    visitOrder.forEach(item => {
      const neighbours = adjList[item];
      for (let i = 0; i < neighbours.length; i++) {
        const neighbour = neighbours[i];

        distanceObj[neighbour] = Math.min(
          distanceObj[neighbour],
          weightList[item][i] + distanceObj[item]
        );
      }
    });

    console.log(distanceObj);

  };
  
  const adjList = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['d', 'g'],
    d: ['e', 'f', 'g'],
    e: ['h'],
    f: ['h'],
    g: ['h'],
    h: [],
  };

  const weightList = {
    a: [3, 6],
    b: [4, 11],
    c: [8, 11],
    d: [-4, 5, 2],
    e: [9],
    f: [1],
    g: [2],
    h: [],
  };
  
  const n = Object.keys(adjList).length;
  singleSourceShortestPath(adjList, weightList, n);
  
  