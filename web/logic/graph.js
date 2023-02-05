import graph from "./graphData.json";
const nodes = Object.keys(graph);
const queue = [];

const pQPush = (related) => {
  let flag = false;

  for (let i in queue) {
    if (queue[i].related < related) {
      queue.splice(i, 0, related);
      flag = true;
      break;
    }
  }

  if (!flag) {
    queue.push(related);
  }

  return related;
};

class Graph {
  static getNeighbors(graph, node) {
    return graph[node].related;
  }

  static computeDegree(graph) {
    const degree = {};
    for (const key in graph) {
      degree[key] = graph[key].related.length;
    }

    return degree;
  }

  static dfsStackOrder(node, visited, stack) {
    // Mark as visited
    visited.push(node);
    // Get neighbors and iterate in graph
    this.getNeighbors(graph, node).forEach((neighbor) => {
      const isVisited = visited.includes(neighbor);
      if (!isVisited) {
        this.dfsStackOrder(neighbor, visited, stack);
      }
    });

    // Push to stack
    stack.push(node);
  }

  static dfsMakeSCC(node, visited, component) {
    // Mark as visited
    visited.push(node);

    // Add to current component
    component.push(node);

    // Get neighbors and iterate in inverse graph
    this.getNeighbors(graph, node).forEach((neighbor) => {
      const isVisited = visited.includes(neighbor);
      if (!isVisited) {
        this.dfsMakeSCC(neighbor, visited, component);
      }
    });
  }

  static getStackOrder() {
    // stack and visited stores
    const stack = [];
    const visited = [];

    nodes.forEach((node) => {
      const isVisited = visited.includes(node);
      if (!isVisited) {
        this.dfsStackOrder(node, visited, stack);
      }
    });

    return stack;
  }

  // SCC algorithm
  static getHeterogeneousGroups() {
    // fill order
    const stack = this.getStackOrder();

    // SCC and visited stores
    const groups = [];
    const visited = [];

    const degree = this.computeDegree(graph);
    while (stack.length) {
      // get top of stack
      const node = stack.pop();

      // looks for strongly connected components
      const isVisited = visited.includes(node);
      if (!isVisited) {
        const component = [];
        this.dfsMakeSCC(node, visited, component);

        // check if component has only two related
        let onlyTwoRelated = true;
        for (const node in component) {
          if (degree[component[node]] !== 2) {
            onlyTwoRelated = false;
            break;
          }
        }
        if (onlyTwoRelated) {
          groups.push(component);
        } else {
          for (let related = 3; related < component.length; ++related) {
            for (const node in component) {
              if (degree[component[node]] <= related) {
                break;
              }
            }

            pQPush({ component, related }, related);
          }
        }
      }
    }

    return [...groups, ...queue.map((item) => item.component)];
  }
}

module.exports = { Graph, graph };
