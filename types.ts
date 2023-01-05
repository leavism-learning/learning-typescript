type WindowStates = 'open' | 'closed' | 'minimized';

interface Bag<T> {
  add: (obj: T) => void;
  get: () => T;
}

declare const sack: Bag<string>;

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`(${p.x}, ${p.y})`);
}

const coordinate = { x: 10, y: 12 };
logPoint(coordinate);
