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

export * from "./resource";

// tslint:disable-next-line: variable-name
export const Resources = {
	blocks: Blocks,
	bridgechains: Bridgechains,
	businesses: Businesses,
	delegates: Delegates,
	locks: Locks,
	node: Node,
	peers: Peers,
	rounds: Rounds,
	transactions: Transactions,
	votes: Votes,
	wallets: Wallets,
};

export type AvailableResourcesName = keyof typeof Resources;
export type AvailableResource<T extends AvailableResourcesName> = InstanceType<typeof Resources[T]>;
