type ReturnPipeType<T, R> = (a: T) => R;

type LastReturnType<T extends ((a: any) => any)[]> = T extends [
  ...infer Rest,
  infer Last extends (a: any) => any,
]
  ? ReturnType<Last>
  : never;

function pipe<A, B, C>(a: (a: A) => B, b: (a: B) => C): ReturnPipeType<A, C>;

function pipe<A, B, C, D>(a: (a: A) => B, b: (a: B) => C, c: (a: C) => D): ReturnPipeType<A, D>;

function pipe<A, B, C, D, E>(
  a: (a: A) => B,
  b: (a: B) => C,
  c: (a: C) => D,
  e: (a: D) => E,
): ReturnPipeType<A, E>;

function pipe<A, B, C, D, E, F>(
  a: (a: A) => B,
  b: (a: B) => C,
  c: (a: C) => D,
  e: (a: D) => E,
  f: (a: E) => F,
): ReturnPipeType<A, F>;

function pipe<T, U extends (a: any) => any, R extends U[]>(
  f: (a: T) => any,
  ...fs: R
): ReturnPipeType<T, LastReturnType<R>> {
  return (a) => fs.reduce((acc, f) => f(acc), f(a));
}

export default pipe;
