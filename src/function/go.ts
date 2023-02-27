import { ArityFunction } from '../types/ArityFunction';
import { MaybePromise } from '../types/MaybePromise';
import { FirstParameters } from '../types/ParameterType';
import { LastReturnType } from '../types/ReturnType';
import { asyncPipe, pipe } from './pipe';

export const go = <T extends ArityFunction[]>(
  target: FirstParameters<T>[0],
  ...fs: T
): LastReturnType<T> => pipe(...fs)(target);

export const asyncGo = async <T extends ArityFunction[]>(
  target: MaybePromise<FirstParameters<T>[0]>,
  ...fs: T
): Promise<LastReturnType<T>> => asyncPipe(...fs)(target);
