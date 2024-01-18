type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

type Pass = true;

type Fail = false;

export declare function check<Type, Expect, Outcome extends Pass | Fail>(
  debug?: Type,
): Equal<Equal<Type, Expect>, Outcome>;

export declare function checks(checks: Pass[]): void;
