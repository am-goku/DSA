class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1); //unidirectional graph
  }

  printGraph() {
    for (const [vertex, neighbors] of this.adjacencyList) {
      const neighborsString = neighbors.join(", ");
      console.log(`${vertex} -> ${neighborsString}`);
    }
  }


  bfs(startingVertex){
    const visited = new Set();
    const queue = [startingVertex];

    while(queue.length > 0){
      const current = queue.shift();
      console.log(current);

      const neighbors = this.adjacencyList.get(current);

      neighbors.forEach((neighbor)=> {
        if(!visited.has(neighbor)){
          visited.add(neighbor);
          queue.push(neighbor);
        }
      })
    }

  }


  dfsRec(startingVertex) {
    const visited = new Set();
    const result = [];

    const dfs = (vertex) => {
        visited.add(vertex);
        result.push(vertex);
        
        const neighbors = this.adjacencyList.get(vertex);

        neighbors.forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        });

        
    }


    dfs(startingVertex);
    return [...result];
  }

}



const graph = new Graph();


graph.addVertex(10)
graph.addVertex(20)
graph.addVertex(30)
graph.addVertex(40);
graph.addVertex(50);
graph.addVertex(60);
graph.addVertex(70);
graph.addVertex(80);
graph.addVertex(90);


graph.addEdge(10, 30);
graph.addEdge(10, 40);
graph.addEdge(40, 80);
graph.addEdge(90, 80);
graph.addEdge(20, 40);
graph.addEdge(30, 90);
graph.addEdge(10, 90);


graph.printGraph()


console.log(graph.dfsRec(10));

graph.bfs(10)

