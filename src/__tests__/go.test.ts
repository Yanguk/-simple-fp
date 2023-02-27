import go from '../common/go';

const add5 = (a: number) => a + 5;
const multi = (a: number) => a * a;

it('go test', () => {
  const target = 20;

  const assert = (a: number) => expect(a).toBe(25 * 25);

  go(target, add5, multi, assert);
});
