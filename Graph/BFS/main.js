// BFS construction

const addEdge = (adjMatrix, i, j) => {
  adjMatrix[i][j] = 1;
  adjMatrix[j][i] = 1;
};

const displayAdjMatrix = (adjMatrix, n) => {
  for (let i = 0; i < n; i++) {
    const rows = [];
    for (let j = 0; j < n; j++) {
      rows.push(adjMatrix[i][j]);
    }
    console.log(...rows);
  }
};

const bfs = (adjMatrix, startIndex) => {
  const queue = [];
  const visited = [];

  queue.push(startIndex);
  visited.push(startIndex);

  while (queue.length > 0) {
    const startItem = queue[0];
    const unvisitedNeighbours = adjMatrix[startItem].map((item, index) => { // Replacing value by index if it is a neighbour
      if (item === 1) return index;
      return item;
    })
    .filter(item => item > 0) // Getting only the neighbours
    .filter(item => visited.indexOf(item) < 0); // Getting only the unvisited neighbours

    if (unvisitedNeighbours.length > 0) {
      visited.push(...unvisitedNeighbours);
      queue.push(...unvisitedNeighbours);
    }

    queue.shift();
  }

  return visited;
}

const solve = () => {
  const adjMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  addEdge(adjMatrix, 0, 7);
  addEdge(adjMatrix, 0, 9);
  addEdge(adjMatrix, 0, 11);
  addEdge(adjMatrix, 7, 11);
  addEdge(adjMatrix, 7, 3);
  addEdge(adjMatrix, 7, 6);
  addEdge(adjMatrix, 9, 8);
  addEdge(adjMatrix, 9, 10);
  addEdge(adjMatrix, 3, 2);
  addEdge(adjMatrix, 3, 4);
  addEdge(adjMatrix, 6, 5);
  addEdge(adjMatrix, 8, 1);
  addEdge(adjMatrix, 8, 12);
  addEdge(adjMatrix, 10, 1);
  addEdge(adjMatrix, 2, 12);
  

  displayAdjMatrix(adjMatrix, 13);

  console.log('--------- BFS TRAVERSAL ----------');

  const bfsTraversal = bfs(adjMatrix, 0);
  console.log(bfsTraversal);
  
}

solve();
