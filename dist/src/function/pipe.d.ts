import { ArityFunction } from '../types/ArityFunction';
import { MaybePromise } from '../types/MaybePromise';
import { FirstParameters } from '../types/ParameterType';
import { LastReturnType } from '../types/ReturnType';
export declare const pipe: <T extends ArityFunction[]>(...fs: T) => (...args: FirstParameters<T>[]) => LastReturnType<T>;
export declare const asyncPipe: <T extends ArityFunction[]>(...fs: T) => (...args: MaybePromise<FirstParameters<T>>[]) => Promise<LastReturnType<T>>;
