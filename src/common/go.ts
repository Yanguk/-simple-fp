function go<A>(value: A): A;

function go<A, B>(value: A, fn1: (a: A) => B): B;

function go<A, B, C>(value: A, fn1: (a: A) => B, fn2: (a: B) => C): C;

function go<A, B, C, D>(
  value: A,
  fn1: (a: A) => B,
  fn2: (a: B) => C,
  fn3: (a: C) => D
): D;

function go<A, B, C, D, E>(
  value: A,
  fn1: (a: A) => B,
  fn2: (a: B) => C,
  fn3: (a: C) => D,
  fn4: (a: D) => E
): E;

function go<A, B, C, D, E, F>(
  value: A,
  fn1: (a: A) => B,
  fn2: (a: B) => C,
  fn3: (a: C) => D,
  fn4: (a: D) => E,
  fn5: (a: E) => F
): F;

function go(value: unknown, ...fns: Function[]) {
  return fns.reduce((acc, fn) => fn(acc), value);
}

export default go;
