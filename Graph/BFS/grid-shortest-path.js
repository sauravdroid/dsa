const displayAdjMatrix = (adjMatrix, n) => {
  for (let i = 0; i < n; i++) {
    const rows = [];
    for (let j = 0; j < n; j++) {
      rows.push(adjMatrix[i][j]);
    }
    console.log(...rows);
  }
};

const getNeighbours = (adjMatrix, item) => {
  const row = item.x;
  const col = item.y;

  const n = adjMatrix[0].length;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, 1, -1];

  const neighbours = [];

  dr.forEach((rI, index) => {
    const cI = dc[index];
    const rVal = row + rI; // value of x for the neighbouring node
    const cVal = cI + col; // value of y for the neighbouring node

    if (rVal >= 0 && rVal < n && cVal >= 0 && cVal < n) { // Coordinates within the limits
      // checking if the next position can be visited or it's a rock
      if (adjMatrix[rVal][cVal] !== '0') {
        neighbours.push({x: rVal, y: cVal, isDest: adjMatrix[rVal][cVal] === 'd'});
      }
    }
  });

  return neighbours;
}
 
const shortestPath = (adjMatrix, sRow, sCol) => {
  let shortestPath = 0;

  const queue = [];
  const visited = [];

  visited.push({x: sRow, y: sCol, cost: 0, isDest: false});
  queue.push({x: sRow, y: sCol, cost: 0, isDest: false});
  

  while (queue.length > 0) {
    const startItem = queue[0];
    const neighbours = getNeighbours(adjMatrix, startItem);

    const unVisitedNeighbours = neighbours.filter(item => {
      return visited.findIndex(vItem => (vItem.x === item.x && vItem.y === item.y)) < 0
    });
    
    if (unVisitedNeighbours.length > 0) {
      const nNeighbours = unVisitedNeighbours.map(item => ({
        ...item,
        cost: 1 + startItem.cost
      }));

      queue.push(...nNeighbours);
      visited.push(...nNeighbours);

      const destIndex = visited.findIndex(item => item.isDest);
      
      if (destIndex >= 0) {
        return visited[destIndex].cost;
      }
    }

    queue.shift();
  }

  return -1;
}

const solve = () => {
  const adjMatrix = [
    ['0', '*', '0', 's'],
    ['*', '0', '*', '*'],
    ['0', '*', '*', '*'],
    ['d', '*', '*', '*'],
  ];

  displayAdjMatrix(adjMatrix, 4);
  const visited = shortestPath(adjMatrix, 0, 3);
  console.log(visited);
}

solve();
