// Function type expressions
// These describes a function and are
// syntactically similar to arrow functions
function greeter(func: (a: string) => void) {
  func('Hello world');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole); // > Hello world

// We could also do:
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  func('Hello world');
}
// and it's the same thing, probably cleaner tho

// Call signatures
// Functions can have properties, in addition to being callable
// But function type expression syntax won't allow
// for declaring propertiers

// But you can use call signatures to assign properties to a function
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = 'default description';

doSomething(myFunc);
