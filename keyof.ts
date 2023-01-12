type Coordinate = {
  x: number;
  y: number;
};

// Equivalent to type Coor = "x" | "y"
type Coor = keyof Coordinate;

// typeof takes an object type and produces a string
// or numeric union of its keys

// if the type already has a string or number index signature
// keyof will return those types instead
type Arrayish = { [n: number]: unknown };

// type A = number
type A = keyof Arrayish;
