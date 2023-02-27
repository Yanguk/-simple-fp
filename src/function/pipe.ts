import { ArityFunction } from '../types/ArityFunction';
import { MaybePromise } from '../types/MaybePromise';
import { FirstParameters } from '../types/ParameterType';
import { LastReturnType } from '../types/ReturnType';

export const pipe =
  <T extends ArityFunction[]>(...fs: T) =>
  (...args: FirstParameters<T>[]): LastReturnType<T> => {
    const iter = fs[Symbol.iterator]();

    let cur = iter.next();
    let acc = cur.value(...args);

    while (!(cur = iter.next()).done) {
      acc = cur.value(acc);
    }

    return acc;
  };

export const asyncPipe =
  <T extends ArityFunction[]>(...fs: T) =>
  async (
    ...args: MaybePromise<FirstParameters<T>>[]
  ): Promise<LastReturnType<T>> => {
    const iter = fs[Symbol.iterator]();

    let cur = iter.next();

    let target = await Promise.all(args);
    let acc = await cur.value(...target);

    while (!(cur = iter.next()).done) {
      acc = await cur.value(acc);
    }

    return acc;
  };
