import { HasTail } from "./HasTail";
import { Head } from "./Head";
import { Tail } from "./Tail";

type CurryV0<P extends any[], R> =
	(arg0: Head<P>) =>
		HasTail<P> extends true
			? CurryV0<Tail<P>, R>
			: R;


type CurryV1<P extends any[], R> =
	(arg0: Head<P>, ...rest: Tail<Partial<P>>) =>
		HasTail<P> extends true
			? CurryV1<Tail<P>, R>
			: R

type CurryV2<P extends any[], R> =
	<T extends any[]>(...args: T) =>
		HasTail<P> extends true
			? CurryV2<Tail<P>, R>
			: R
