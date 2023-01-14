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
