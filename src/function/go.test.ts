import { asyncGo, go } from './go';

const add5 = (a: number) => a + 5;
const multi = (a: number) => a * a;

it('go test', () => {
  const target = 20;

  const assert = (a: number) => expect(a).toBe(25 * 25);

  go(target, add5, multi, assert);
});

it('asyncGo test', async () => {
  const target = Promise.resolve(10);

  const assert = (a: number) => expect(a).toBe(15 * 15);

  await asyncGo(target, add5, multi, assert);
});
