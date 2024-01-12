export const map =
  <T, U>(f: (v: T) => U) =>
  (a: T[]): U[] =>
    a.map(f);

export const forEach =
  <T>(f: (v: T) => void) =>
  (a: T[]): void =>
    a.forEach(f);

export const filter =
  <T>(f: (v: T) => T) =>
  (a: T[]): T[] =>
    a.filter(f);

