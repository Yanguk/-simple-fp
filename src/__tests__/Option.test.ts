import { Option } from '../index';

describe('* pipe 함수 테스트', () => {
  const maybeSome = (() => {
    const number = Math.random();

    if (number * 10 < 5) {
      return null;
    }

    return number;
  })()

  it('option test', () => {
    const target = Option.wrap(maybeSome);

    const a = target.map((a) => a + 2);

    if (a.isSome()) {
      expect(a.unwrap()).toBeLessThan(10);
    }

    if (a.isNone()) {
      expect(a.unwrapOr(123)).toBe(123);
    }
  });

  it('타입추론 테스트', () => {});
});
