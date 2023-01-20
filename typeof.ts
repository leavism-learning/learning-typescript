type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function func() {
  return { x: 10, y: 3 };
}

// type P = ReturnType<func>; >> Error because values and types aren't the same thing
type P = ReturnType<typeof func>; // Have to refure the the return type, not the return value

// use an indexed access type to look up
// specific property on another type
type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];

type I1 = Person['age' | 'name'];
type I2 = Person[keyof Person];

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];

// Use indexed access types to get the type
// of an element in an array
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person = (typeof MyArray)[number];

type Person = {
  name: string;
  age: number;
};
type Age = (typeof MyArray)[number]['age'];

type Age = number;
// Or
type Age2 = Person['age'];

// Something we do often is
// use conditional types to apply constraints
// and then extract out types
// This can be easily done with infer
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
// So now instead of using indexed access types
// We can just infer the type of the array element
