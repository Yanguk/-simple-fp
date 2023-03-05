import { None, Option, Some, range, go } from '../index';
import arr from '../common/arrayUtil';

describe('* pipe 함수 테스트', () => {
  const getMaybeSome = (): Option<number> => {
    const number = Math.random();

    if (number * 10 < 5) {
      return new None();
    }

    return new Some(number);
  };

  it('option test', () => {
    go(
      range(20),
      arr.map(getMaybeSome),
      arr.map((option) => option.map((a) => a + 2)),
      arr.forEach((option) => option.inspect((a) => expect(a).toBeLessThan(10)))
    );
  });

  it('타입추론 테스트', () => {});
});
