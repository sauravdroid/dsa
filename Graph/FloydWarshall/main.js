class WeightedMatrix {
    constructor(n) {
      this.n = n;
      this.arr = new Array(n).fill(Infinity).map(_ => new Array(n).fill(Infinity));
      this.initialize();
    }
  
    initialize() {
      for (let i = 0; i < this.n; i++) {
        for (let j = 0; j < this.n; j++) {
          if (i === j) {
            this.arr[i][j] = 0;
          }
        }
      }
    }
  
    displayMatrix() {
      for (let i = 0; i < this.n; i++) {
        const row = [];
        for (let j = 0; j < this.n; j++) {
          row.push(this.arr[i][j]);
        }
        console.log(...row);
      }
    }
  
    addEdge(i, j, weight) {
      if (i < this.n && j < this.n && i !== j) {
        this.arr[i][j] = weight;
      }
    }
  }
  
  const displayMatrix = arr => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(arr[i][j]);
      }
      console.log(...row);
    }
  }
  
  const floydWarshall = arr => {
    console.log('Original');
    displayMatrix(arr);
    console.log('Original');
  
    const n = arr.length;
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i!== k && j!== k) {
            arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
          }
        }
      }
      displayMatrix(arr);
      console.log('----------------');
      console.log('----------------');
      console.log('----------------');
    }
  }
  
  const matrix = new WeightedMatrix(4);
  matrix.addEdge(0, 1, 3);
  matrix.addEdge(0, 3, 5);
  matrix.addEdge(1, 0, 2);
  matrix.addEdge(1, 3, 4);
  matrix.addEdge(2, 1, 1);
  matrix.addEdge(3, 2, 2);
  
  
  floydWarshall(matrix.arr);
  
  matrix.displayMatrix();