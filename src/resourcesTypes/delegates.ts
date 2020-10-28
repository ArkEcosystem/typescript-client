import { ApiQuery } from "../interfaces";

export interface Delegate {
	username: string;
	address: string;
	publicKey: string;
	votes: number;
	rank: number;
	blocks: {
		produced: number;
		missed: number;
		last?: {
			id: string;
			height: number;
			timestamp: {
				epoch: number;
				unix: number;
				human: string;
			};
		};
	};
	production: {
		approval: number;
	};
	forged: {
		fees: number;
		rewards: number;
		total: number;
	};
}

export interface Voter {
	address: string;
	publicKey?: string;
	balance: number;
	nonce: number;
	attributes: object;
}

export interface AllDelegatesApiQuery extends ApiQuery {
	/** Type by which it orders delegates. */
	orderBy?: string;
	username?: string;
	address?: string;
	"votes.from"?: number;
	"votes.to"?: number;
	"rank.from"?: number;
	"rank.to"?: number;
	isResigned?: boolean;
	"blocks.produced.from"?: number;
	"blocks.produced.to"?: number;
	"blocks.last.id"?: string;
	"blocks.last.height"?: number;
	"blocks.last.timestamp.epoch.from"?: number;
	"blocks.last.timestamp.epoch.to"?: number;
	"blocks.last.timestamp.unix.from"?: number;
	"blocks.last.timestamp.unix.to"?: number;
	"blocks.last.timestamp.human"?: string;
	"production.approval.from"?: number;
	"production.approval.to"?: number;
	"forged.fees.from"?: number;
	"forged.fees.to"?: number;
	"forged.rewards.from"?: number;
	"forged.rewards.to"?: number;
	"forged.total.from"?: number;
	"forged.total.to"?: number;
}

export interface DelegateBlocksApiQuery extends ApiQuery {
	/** Type by which it orders blocks. */
	orderBy?: string;
	id?: string[];
	version?: number[];
	"timestamp.from"?: number;
	"timestamp.to"?: number;
	previousBlock?: string[];
	"height.from"?: number;
	"height.to"?: number;
	"numberOfTransactions.from"?: number;
	"numberOfTransactions.to"?: number;
	"totalAmount.from"?: number;
	"totalAmount.to"?: number;
	"totalFee.from"?: number;
	"totalFee.to"?: number;
	"reward.from"?: number;
	"reward.to"?: number;
	"payloadLength.from"?: number;
	"payloadLength.to"?: number;
	payloadHash?: string[];
	generatorPublicKey?: string[];
	blockSignature?: string[];
}

export interface DelegateVotersApiQuery extends ApiQuery {
	/** Type by which it order voters. */
	orderBy?: string;
	address: string;
	publicKey: string;
	balance: string;
	nonce: string;
	attributes: object;
}
