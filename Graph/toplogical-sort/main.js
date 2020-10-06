const adjList = {
    a: ['b', 'c'],
    b: ['c', 'd'],
    c: ['e'],
    d: ['f'],
    e: ['f', 'h'],
    f: ['g'],
    g: [],
    h: []
  };
  
  const topSort = (adjList, at, visited = [], result = []) => {
    if (visited.indexOf(at) >= 0) {
      return;
    }
  
    visited.push(at);
  
    // Getting unvisited neighbours
    const neighbours = adjList[at].filter(item => (visited.indexOf(item) < 0));
  
    for (neighbour of neighbours) {
      topSort(adjList, neighbour, visited, result);
    }
  
    result.push(at);
  
    return result;
  }
  
  const visited = [];
  const result = [];
  
  for (item in adjList) {
    topSort(adjList, item, visited, result);
  }
  
  console.log(result);