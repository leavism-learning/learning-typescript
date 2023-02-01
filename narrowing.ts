// Type guarding
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') return ' '.repeat(padding) + input;
  return padding + input;
}

// Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    // if will coerce conditions to boleans
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

Boolean('hello'); // true
// Truthiness narrowing is great for guarding
// against null or undefined

// But can often be error prone when checking on
// primitives
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}
// Wrapped the whole body of function in a truthy check
// but we may no longer be handling the empty string case correctly

// Equality narrowing
// We check that x === y
// Since string is the only common type for both x and y
// We can call string methods on both
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    // ^?
    y.toLowerCase();
    // ^?
  } else {
    console.log(x);
    //          ^?
    console.log(y);
    //          ^?
  }
}

// And with equality narrow, we can rewrite the
// bad printAll function again
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

// in operator checks if object or its prototype
// chain has a property witha
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}
