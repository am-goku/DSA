/* The GraphNode class represents a graph data structure and provides methods for adding vertices and
edges, as well as performing depth-first and breadth-first search traversals. */
class GraphNode{
  /**
   * The constructor function initializes an empty adjacency list using a Map data structure.
   */
  constructor(){
    this.adjacencyList = new Map();
  }


  /**
   * The function adds a vertex to the adjacency list if it does not already exist.
   * @param value - The value parameter represents the value or identifier of the vertex that you want
   * to add to the graph.
   */
  addvertex(value) {
    if(!this.adjacencyList.has(value)){
      this.adjacencyList.set(value, [])
    }
  }

  /**
   * The function adds an edge between two vertices in an adjacency list.
   * @param v1 - The first vertex of the edge.
   * @param v2 - The parameter "v2" represents the second vertex of the edge that you want to add to
   * the graph.
   */
  addEdges(v1, v2){
    this.adjacencyList.get(v1).push(v2)
    this.adjacencyList.get(v2).push(v1);
  }


  /**
   * The function performs a depth-first search traversal starting from a given vertex and returns the
   * visited vertices in the order they were visited.
   * @param startingVertex - The startingVertex parameter is the vertex from which the depth-first
   * search traversal will begin. It is the vertex where the traversal will start exploring the graph.
   * @returns an array containing the vertices visited during the Depth First Search traversal starting
   * from the given startingVertex.
   */
  dfsTravel(startingVertex){
    const visited = new Set();

    const result = [];

    const dfs = (vertex) => {
      visited.add(vertex);
      result.push(vertex)

      const currVertex = this.adjacencyList.get(vertex);

      currVertex.forEach(e => {
        if(!visited.has(e)){
          dfs(e)
        }
      })
    }

    dfs(startingVertex);

    return result;

  }



  /**
   * The bfs function performs a breadth-first search starting from a given vertex and returns the
   * visited vertices in the order they were visited.
   * @param startingVertex - The startingVertex parameter is the vertex from which the breadth-first
   * search (BFS) will begin. It is the vertex where the BFS algorithm starts exploring the graph.
   * @returns an array containing the vertices visited in breadth-first order starting from the
   * startingVertex.
   */
  bfs(startingVertex){
    const visited = new Set();

    const queue = [startingVertex], result = [];

    visited.add(startingVertex);


    while(queue.length){
      const node = queue.shift();
      result.push(node)
      const currVertex = this.adjacencyList.get(node);

      currVertex.forEach(e => {
        if(!visited.has(e)){
          visited.add(e)
          queue.push(e)
        }
      })
    }

    return result;
  }


}


/* The code is creating a new instance of the `GraphNode` class called `graph`. It then adds vertices
to the graph using the `addvertex` method, with values of 10, 90, 20, 50, 30, and 40. It then adds
edges between the vertices using the `addEdges` method, creating connections between 10 and 20, 20
and 30, 30 and 50, 50 and 90, 10 and 90, and 30 and 40. */
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