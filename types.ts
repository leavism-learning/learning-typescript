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
logPoint(newVPoint);

// Generics in functions. Captures the Type inside < > and can use it in the parameter and return
// Whatever Type is, it stays consistent.
// In this case, the arg type has the stay the same as the return type.
function identify<Type>(arg: Type): Type {
  // do something
  return arg;
}

// Using Type is different from any because the type stays consistent with Type.
// In this case, the parameter arg could take in a number, but then the output could be a string
function anyIdentify(arg: any): any {
  // do something
  return arg;
}
