type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function func() {
  return { x: 10, y: 3 };
}

// type P = ReturnType<func>; >> Error because values and types aren't the same thing
type P = ReturnType<typeof func>; // Have to refure the the return type, not the return value
