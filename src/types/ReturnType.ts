import { ArityFunction } from "./ArityFunction";

export type FirstReturnType<T extends ArityFunction[]> = T extends [
  infer FIRST extends ArityFunction,
  ...infer REST
]
  ? ReturnType<FIRST>
  : never;

export type LastReturnType<T extends ArityFunction[]> = T extends [
  ...infer REST,
  infer LAST extends ArityFunction
]
  ? ReturnType<LAST>
  : never;
