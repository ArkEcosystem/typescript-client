import { ApiQuery } from "../interfaces";

export interface Block {
	id: string;
	version: number;
	height: number;
	previous: string;
	forged: {
		reward: string;
		fee: string;
		total: string;
		amount: string;
	};
	payload: {
		hash: string;
		length: number;
	};
	generator: {
		username: string;
		address: string;
		publicKey: string;
	};
	signature: string;
	confirmations: number;
	transactions: number;
	timestamp: {
		epoch: number;
		unix: number;
		human: string;
	};
}

export interface AllBlockApiQuery extends ApiQuery {
	/** Type by which it orders blocks. */
	orderBy?: string;
	/** The identifier of the block to be retrieved. */
	id?: string[];
	version?: number[];
	timestamp?: {
		from?: number;
		to?: number;
	};
	previousBlock?: string[];
	/** The height of the block to be retrieved. */
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
	payloadHash?: number[];
	generatorPublicKey?: string[];
	blockSignature?: string[];
}

export interface TransactionsInBlockApiQuery extends ApiQuery {
	/** Type by which it orders transactions of a block. */
	orderBy?: string;
	address?: string[];
	senderId?: string[];
	recipientId?: string[];
	id?: string[];
	version?: number[];
	blockId?: string[];
	sequence?: {
		from?: number;
		to?: number;
	};
	timestamp?: {
		from?: number;
		to?: number;
	};
	nonce?: {
		from?: number;
		to?: number;
	};
	senderPublicKey?: string[];
	type?: number[];
	typeGroup?: number[];
	vendorField?: string[];
	amount?: {
		from?: number;
		to?: number;
	};
	fee?: {
		from?: number;
		to?: number;
	};
	asset?: object[];
}
