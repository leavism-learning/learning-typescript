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
