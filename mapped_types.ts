type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

// Mapped types build on the syntax for index signatures
// which are used to declare the types of properties which
// won't be declared later down the line
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// Use as for keymapping
// Great with template literal types
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
