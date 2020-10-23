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
	votes?: {
		from?: number;
		to?: number;
	};
	rank?: {
		from?: number;
		to?: number;
	};
	isResigned?: boolean;
	blocks?: {
		produced?: {
			from?: number;
			to?: number;
		};
		last?: {
			id?: string;
			height?: number;
			timestamp: {
				epoch: {
					from?: number;
					to?: number;
				};
				unix: {
					from?: number;
					to?: number;
				};
				human: string;
			};
		};
	};
	production: {
		approval: {
			from?: number;
			to?: number;
		};
	};
	forged: {
		fees: {
			from?: number;
			to?: number;
		};
		rewards: {
			from?: number;
			to?: number;
		};
		total: {
			from?: number;
			to?: number;
		};
	};
}

export interface DelegateBlocksApiQuery extends ApiQuery {
	/** Type by which it orders blocks. */
	orderBy?: string;
	id?: string[];
	version?: number[];
	timestamp?: {
		from?: number;
		to?: number;
	};
	previousBlock?: string[];
	height?: {
		from?: number;
		to?: number;
	};
	numberOfTransactions?: {
		from?: number;
		to?: number;
	};
	totalAmount?: {
		from?: number;
		to?: number;
	};
	totalFee?: {
		from?: number;
		to?: number;
	};
	reward?: {
		from?: number;
		to?: number;
	};
	payloadLength?: {
		from?: number;
		to?: number;
	};
	payloadHash?: string[];
	generatorPublicKey?: string[];
	blockSignature?: string[];
}

export interface DelegateVotersApiQuery extends ApiQuery {
	/** Type by which it order voters. */
	orderBy?: string;
	address: string;
	publicKey: string;
	balance: number;
	nonce: number;
	attributes: object;
}
