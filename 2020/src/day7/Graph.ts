interface AdjacencyList {
  [key: string]: Array<WeightedVertex>;
}

interface WeightedVertex {
  vertex: string;
  weight: number;
}

/**
 * Consists of a finite set of nodes/vertices and edges/arrows connecting them.
 *
 * Implemented as an adjacency list which is an array of Linked Lists.
 *
 * Size of the list is equal to number of nodes/vertices
 * Each index of the list represents a vertex/node
 *
 */
export class Graph {
  private vertices: Array<string>;
  private children: AdjacencyList;
  private parents: AdjacencyList;
  private ancestors: Set<string>;
  private weightedCount: number;

  constructor() {
    this.vertices = [];
    this.children = {};
    this.parents = {};
    this.ancestors = new Set();
    this.weightedCount = 0;
  }

  public addVertex(vertex: string): void {
    if (!this.children[vertex]) {
      this.vertices.push(vertex);
      this.children[vertex] = [];
      this.parents[vertex] = [];
    }
  }

  public addChildEdge(ver1: string, ver2: string, weight: number): void {
    if (this.children[ver1] === undefined) {
      this.addVertex(ver1);
    }

    if (Number.isNaN(weight)) {
      return;
    }

    this.children[ver1].push({ vertex: ver2, weight });
  }

  public addParentEdge(ver1: string, ver2: string, weight: number): void {
    if (this.parents[ver2] === undefined) {
      this.addVertex(ver2);
    }

    if (Number.isNaN(weight)) {
      return;
    }

    this.parents[ver2].push({ vertex: ver1, weight });
  }

  public printChildren(): void {
    for (let i = 0; i < this.vertices.length; i++) {
      const node = this.vertices[i];
      const adjacent = this.children[node];
      console.info(node, 'is connected to', adjacent);
    }
  }

  public getChildren(node: string): Array<WeightedVertex> {
    return this.children[node];
  }

  public getParents(node: string): Array<WeightedVertex> {
    return this.parents[node];
  }

  public getAncestors(node: string): Set<string> {
    const parents = this.getParents(node);
    console.info(node, 'had', parents.length, 'parents');
    if (parents.length) {
      parents.forEach((parent) => {
        this.ancestors.add(parent.vertex);
        this.getAncestors(parent.vertex);
      });
    }
    return this.ancestors;
  }

  public getWeightedDescendants(node: string, weight: number): number {
    const children = this.getChildren(node);
    console.info(node, 'with weight', weight, 'had', children.length, 'children');
    this.weightedCount += weight;
    if (children.length) {
      console.info({ count: this.weightedCount });
      children.forEach((child: WeightedVertex) => {
        this.weightedCount += weight * this.getChildren(child.vertex).length;
        this.getWeightedDescendants(child.vertex, child.weight);
      });
    }
    return this.weightedCount;
  }
}
