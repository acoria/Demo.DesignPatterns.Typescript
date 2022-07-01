export {};

declare global {
  interface Array<T> {
    apply(block: (list: Array<T>) => void): Array<T>;
  }

  interface String {
    ifNotEmpty(block: (value: string) => void): void;
  }

  interface Boolean {
    ifTrue(block: () => void);
    ifFalse(block: () => void);
  }

  interface Object {
    takeIf<T>(predicate: (instance: T) => boolean): T | null;
  }
}

Array.prototype.apply = function (block) {
  block(this);
  return this;
};

String.prototype.ifNotEmpty = function (block: (value: string) => void): void {
  if (this != "") {
    block(this);
  }
};

Boolean.prototype.ifTrue = function (block: () => void): void {
  if (this) {
    block();
  }
};

Boolean.prototype.ifFalse = function (block: () => void): void {
  if (!this) {
    block();
  }
};

Object.prototype.takeIf = function <T>(
  predicate: (instance: T) => boolean
): T | null {
  if (predicate(this)) {
    return this;
  } else {
    return null;
  }
};
