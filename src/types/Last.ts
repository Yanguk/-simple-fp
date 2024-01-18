export type Last<T extends any[]> = 
	T extends [infer First, ...infer Rest]
    ? Rest extends []
        ? First
        : Last<Rest>
    : never;


/**
 *
 * type test = Last<[3, 2, 1]>; // 1
 *
 */
