class GraphNode{
  constructor() {
    this.adjacencyList = new Map();
  }

  addvertex(vertex) {
    if(!this.adjacencyList.has(vertex)){
      this.adjacencyList.set(vertex, [])
    }
  }

  addEdges(v1, v2) {
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  dfsTravel(startingVertex) {
    const visited = new Set();
    const result = [];

    const dfs = (vertex) => {
      visited.add(vertex);
      result.push(vertex);

      const current = this.adjacencyList.get(vertex)

      current.forEach(node => {
        if(!visited.has(node)){
          dfs(node)
        }
      });
    }

    dfs(startingVertex);
    return result;
  }


  bfs(startingVertex){
    const visited = new Set();
    const result = [];
    const queue = [startingVertex]
    visited.add(startingVertex)

    while(queue.length > 0){

      const node = queue.shift()

      const current = this.adjacencyList.get(node);

      result.push(node)

      current.forEach(element => {
        if(!visited.has(element)){
          visited.add(element)
          queue.push(element)
        }
      })

    }
    return result

  }
}


const graph = new GraphNode();

graph.addvertex(10)
graph.addvertex(90)
graph.addvertex(20)
graph.addvertex(50)
graph.addvertex(30)
graph.addvertex(40);

graph.addEdges(10, 20)
graph.addEdges(20, 30)
graph.addEdges(30, 50)
graph.addEdges(50, 90)
graph.addEdges(10, 90)
graph.addEdges(30, 40);

console.log(graph.dfsTravel(90));

console.log(graph.bfs(90));



console.log(graph.adjacencyList);