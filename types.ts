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

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
