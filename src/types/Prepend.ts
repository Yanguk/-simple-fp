export type Prepend<E, T extends any[]> =
	((head: E, ...args: T) => any) extends ((...args: infer U) => any)
		? U
		: T

/**
 *
 *  type testPrepend = Prepend<boolean, [string, number]> // [boolean, string, number]
 *
 */
