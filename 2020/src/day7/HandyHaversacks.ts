import Axios from 'axios';
import dotenv from 'dotenv';
import { Graph } from './Graph';

dotenv.config();

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/7/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');
  const rows: Array<string> = res.data.split('\n');
  const graph = new Graph();
  rows.forEach((row) => {
    const [outer, inner] = row?.split(' contain ');
    const children = inner?.split(', ');
    const innerColors = children?.map((child: string) => {
      const [count, ...rest] = child.split(' ');
      return {
        weight: count,
        color: `${rest[0]} ${rest[1]}`,
      };
    });
    const outerColor = outer?.replace(' bags', '');
    // console.info({ outerColor, parsed: innerColors });
    graph.addVertex(outerColor);
    innerColors?.forEach((vertex) => {
      // Part 1
      graph.addParentEdge(outerColor, vertex.color, +vertex.weight);
      // part 2
      graph.addChildEdge(outerColor, vertex.color, +vertex.weight);
    });
  });
  // graph.print();
  // console.info(graph.getAncestors('shiny gold').size);
  console.info(graph.getWeightedDescendants('shiny gold', 1));
  // console.info(graph.getParents('pale lime'));
  // console.info(graph.getParents('dim plum'));
}

process.env.NODE_ENV === 'test' ? null : main();
