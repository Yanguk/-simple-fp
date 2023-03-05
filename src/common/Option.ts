abstract class Option<T> {
  private constructor() {}

  static wrap<T>(value: T): Option<NonNullable<T>> {
    if (value == null) {
      return new None<NonNullable<T>>();
    }

    return new Some<NonNullable<T>>(value);
  }

  abstract unwrap(): T;
  abstract unwrapOr(def: T): T;

  abstract expect(err: string | Error): T;

  abstract isSome(): boolean;
  abstract isNone(): boolean;

  abstract isSomeAnd(f: (v: T) => boolean): boolean;

  abstract andThen<R>(f: (v: T) => Option<R>): Option<R>;
  abstract map<U>(f: (a: T) => U): Option<U>;
  abstract inspect(f: (v: T) => void): Option<T>;
}

export class Some<T> implements Option<T> {
  private value: T;

  constructor(v: T) {
    this.value = v;
  }

  unwrap(): T {
    return this.value;
  }

  unwrapOr(_v: T): T {
    return this.value;
  }

  expect(_err: string | Error): T {
    return this.value;
  }

  isSome(): boolean {
    return true;
  }

  isNone(): boolean {
    return false;
  }

  isSomeAnd(f: (v: T) => boolean): boolean {
    return f(this.value);
  }

  andThen<R>(f: (v: T) => Option<R>): Option<R> {
    return f(this.value);
  }

  map<R>(f: (a: T) => R): Option<R> {
    return new Some(f(this.value));
  }

  inspect(f: (v: T) => void): Option<T> {
    f(this.value);

    return new Some(this.value);
  }
}

export class None<T> implements Option<T> {
  unwrap(): T {
    const error = new Error('None.unwrap()');
    error.name = 'MaybeError';

    throw error;
  }

  expect(err: string | Error): T {
    if (err instanceof Error) {
      throw err;
    }

    const newError = new Error(err);
    newError.name = 'MaybeError';

    throw newError;
  }

  isSome(): boolean {
    return false;
  }

  isNone(): boolean {
    return true;
  }

  isSomeAnd(f: (v: T) => boolean): boolean {
    return false;
  }

  andThen<R>(f: (v: T) => Option<R>): Option<R> {
    return new None();
  }

  map<U>(f: (a: T) => U): Option<U> {
    return new None();
  }

  unwrapOr(v: T): T {
    return v;
  }

  inspect(f: (v: T) => void): Option<T> {
    return new None();
  }
}

export default Option;
