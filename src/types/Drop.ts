import { Length } from "./Length"
import { Prepend } from "./Prepend"
import { Tail } from "./Tail"

export type Drop<N extends number, T extends any[], I extends any[] = []> = {
	0: Drop<N, Tail<T>, Prepend<any, I>>
	1: T
}[
	Length<I> extends N
		? 1
		: 0
]

/**
 *
 * type testDrop = Drop<3, [1, 2, 3, 4]> // [3, 4]
 *
 */
