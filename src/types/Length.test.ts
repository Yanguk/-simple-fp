type Expect<T extends true> = T;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

const identityFunc = <T>(arg: T) => arg;

it("Should return whatever you pass in", () => {
  const test1 = identityFunc("hello");

	type test = Expect<Equal<typeof test1, "false">>;

	const a: test = true;

	expect(a).toBe(true);
});

