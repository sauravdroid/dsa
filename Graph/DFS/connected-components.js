const adjMatrix = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0]
  ];
  
  const dfs = (adjMatrix, at, members = [], visited = []) => {
    if (members.indexOf(at) >= 0 || visited.indexOf(at) >= 0) {
      return members;
    }
  
    members.push(at);
    const neighbours = adjMatrix[at];
    neighbours.forEach((item, index) => {
      if (item === 1) {
        dfs(adjMatrix, index, members);
      }
    });
  
    return members;
  };
  
  const connectedComponents = (n) => {
    const groups = [];
    const visited = [];
  
    for (let i = 0; i < n; i++) {
      const members = dfs(adjMatrix, i, [], visited);
      if (members.length > 0) {
        groups.push(members);
        visited.push(...members);
      }
    }
  
    return groups;
  }
  
  const members = connectedComponents(5);
  console.log(members);