import { ArityFunction } from "./ArityFunction";

export type FirstParameters<T extends ArityFunction[]> = T extends [
  infer FIRST extends (...args: any) => any,
  ...infer REST
]
  ? Parameters<FIRST>
  : never;

export type LastParameters<T extends ArityFunction[]> = T extends [
  ...infer REST,
  infer LAST extends (...args: any) => any
]
  ? Parameters<LAST>
  : never;
