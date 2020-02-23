import { Blocks } from "./blocks";
import { Bridgechains } from "./bridgechains";
import { Businesses } from "./businesses";
import { Delegates } from "./delegates";
import { Locks } from "./locks";
import { Node } from "./node";
import { Peers } from "./peers";
import { Rounds } from "./rounds";
import { Transactions } from "./transactions";
import { Votes } from "./votes";
import { Wallets } from "./wallets";

// tslint:disable-next-line: variable-name
export const Resources = {
	Blocks,
	Bridgechains,
	Businesses,
	Delegates,
	Locks,
	Node,
	Peers,
	Rounds,
	Transactions,
	Votes,
	Wallets,
};

export type AvailableResourcesName = keyof typeof Resources;
export type AvailableResource<T extends AvailableResourcesName> = InstanceType<typeof Resources[T]>;
