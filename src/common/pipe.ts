type ReturnPipeType<T, R> = (a: T) => R;

function pipe<A, B, C>(a: (a: A) => B, b: (a: B) => C): ReturnPipeType<A, C>;

function pipe<A, B, C, D>(
  a: (a: A) => B,
  b: (a: B) => C,
  c: (a: C) => D
): ReturnPipeType<A, D>;

function pipe<A, B, C, D, E>(
  a: (a: A) => B,
  b: (a: B) => C,
  c: (a: C) => D,
  e: (a: D) => E
): ReturnPipeType<A, E>;

function pipe<A, B, C, D, E, F>(
  a: (a: A) => B,
  b: (a: B) => C,
  c: (a: C) => D,
  e: (a: D) => E,
  f: (a: F) => F
): ReturnPipeType<A, F>;

function pipe<T extends (a: any) => any>(...fs: T[]) {
  return (a: unknown) => fs.reduce((acc, f) => f(acc), a);
}

export default pipe;
