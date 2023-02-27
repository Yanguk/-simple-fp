import { pipe } from '../index';

describe('* pipe 함수 테스트', () => {
  it('pipe test', () => {
    const add5 = (a: number) => a + 5;
    const multi = (a: number): number => a * a;

    const add5Multi = pipe(add5, multi);

    const result = add5Multi(20);

    expect(result).toBe(25 * 25);
  });

  it('타입추론 테스트', () => {});
});
