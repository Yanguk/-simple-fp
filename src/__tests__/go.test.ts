import { go } from '../index';

describe('* go 함수 테스트', () => {
  const add5 = (a: number) => a + 5;
  const multi = (a: number) => a * a;

  it('go test', () => {
    const target = 20;

    const assert = (a: number) => expect(a).toBe(25 * 25);

    go(target, add5, multi, assert);
  });

  it('타입추론 테스트', () => {});
});
