export let saved = [];

const pQPush = (queue, component) => {
  let flag = false;

  for (let i in queue) {
    if (queue[i].related < component.related) {
      queue.splice(i, 0, component.related);
      flag = true;
      break;
    }
  }

  if (!flag) {
    queue.push(component);
  }
};

class Graph {
  constructor(graph) {
    this.graph = graph;
    this.nodes = Object.keys(graph);
  }

  getNeighbors(node) {
    return this.graph[node].related;
  }

  computeDegree() {
    const degree = {};
    for (const key in this.graph) {
      degree[key] = this.graph[key].related.length;
    }

    return degree;
  }

  dfsStackOrder(node, visited, stack) {
    // Mark as visited
    visited.push(node);
    // Get neighbors and iterate in graph
    this.getNeighbors(node).forEach((neighbor) => {
      const isVisited = visited.includes(neighbor);
      if (!isVisited) {
        this.dfsStackOrder(neighbor, visited, stack);
      }
    });

    // Push to stack
    stack.push(node);
  }

  dfsMakeCC(node, visited, component) {
    // Mark as visited
    visited.push(node);

    // Add to current component
    component.push(node);

    // Get neighbors and iterate graph
    this.getNeighbors(node).forEach((neighbor) => {
      const isVisited = visited.includes(neighbor);
      if (!isVisited) {
        this.dfsMakeCC(neighbor, visited, component);
      }
    });
  }

  getStackOrder() {
    // stack and visited stores
    const stack = [];
    const visited = [];

    this.nodes.forEach((node) => {
      const isVisited = visited.includes(node);
      if (!isVisited) {
        this.dfsStackOrder(node, visited, stack);
      }
    });

    return stack;
  }

  checkPerfectGroup(component) {
    const degree = this.computeDegree(this.graph);
    for (const node in component) {
      if (degree[component[node]] !== 2) {
        return false;
      }
    }

    return true;
  }

  addToPriorityQueue(queue, component) {
    const degree = this.computeDegree(this.graph);
    for (let related = 1; related < component.length; ++related) {
      for (const node in component) {
        if (degree[component[node]] <= related) {
          break;
        }
      }

      return pQPush(queue, { related, component });
    }
  }

  hydrateComponentMember(groups) {
    const hydratedComponent = groups.map((component) => {
      return component.map((node) => {
        return { name: node, ...this.graph[node] };
      });
    });
    return hydratedComponent;
  }

  getHeterogeneousGroups() {
    // fill order
    const stack = this.getStackOrder();

    // queue/groups and visited stores
    const queue = [];
    const groups = [];
    const visited = [];

    while (stack.length) {
      // get top of stack
      const node = stack.pop();

      // looks for connected components
      const isVisited = visited.includes(node);
      if (!isVisited) {
        const component = [];
        this.dfsMakeCC(node, visited, component);
        console.log({ component });

        // check if component has only two related
        if (this.checkPerfectGroup(component)) {
          groups.push(component);
        } else {
          this.addToPriorityQueue(queue, component);
        }
      }
    }

    const hydratedComponentPerfect = this.hydrateComponentMember(groups);
    const hydratedComponentQueue = this.hydrateComponentMember(
      queue.map((item) => item.component)
    );
    const mergedGroups = [
      ...hydratedComponentPerfect,
      ...hydratedComponentQueue,
    ];

    saved = mergedGroups;
    return mergedGroups;
  }
}

export { Graph };
