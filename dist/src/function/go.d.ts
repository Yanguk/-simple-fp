import { ArityFunction } from '../types/ArityFunction';
import { MaybePromise } from '../types/MaybePromise';
import { FirstParameters } from '../types/ParameterType';
import { LastReturnType } from '../types/ReturnType';
export declare const go: <T extends ArityFunction[]>(target: FirstParameters<T>[0], ...fs: T) => LastReturnType<T>;
export declare const asyncGo: <T extends ArityFunction[]>(target: MaybePromise<FirstParameters<T>[0]>, ...fs: T) => Promise<LastReturnType<T>>;
