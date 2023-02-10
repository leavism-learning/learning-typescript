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
