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
		productivity?: number;
	};
	forged: {
		fees: number;
		rewards: number;
		total: number;
	};
}

export interface Voter {
	address: string;
	publicKey: string;
	username?: string;
	secondPublicKey?: string;
	balance: number;
	isDelegate: boolean;
	vote: string;
}

export interface AllDelegatesApiQuery extends ApiQuery {
	/** Type by which it orders delegates. */
	orderBy?: string;
	type?: "resigned" | "never-forged";
	address?: string;
	publicKey?: string;
	secondPublicKey?: string;
	vote?: string;
	username?: string;
	balance?: number;
	voteBalance?: number;
	producedBlocks?: number;
}

export interface DelegateBlocksApiQuery extends ApiQuery {
	/** Type by which it orders blocks. */
	orderBy?: string;
	id?: string;
	version?: number;
	timestamp?: number;
	previousBlock?: string;
	height?: number;
	numberOfTransactions?: number;
	totalAmount?: number;
	totalFee?: number;
	reward?: number;
	payloadLength?: number;
	payloadHash?: string;
	generatorPublicKey?: string;
	blockSignature?: string;
}

export interface DelegateVotersApiQuery extends ApiQuery {
	/** Type by which it order voters. */
	orderBy?: string;
	address?: string;
	publicKey?: string;
	secondPublicKey?: string;
	vote?: string;
	username?: string;
	balance?: number;
	voteBalance?: number;
	producedBlocks?: number;
}
