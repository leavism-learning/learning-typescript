type WindowStates = 'open' | 'closed' | 'minimized';

interface Bag<T> {
  add: (obj: T) => void;
  get: () => T;
}

declare const sack: Bag<string>;
