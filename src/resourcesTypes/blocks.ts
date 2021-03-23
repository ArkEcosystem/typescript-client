import { ApiQuery } from "../interfaces";

export interface Block {
	id: string;
	version: number;
	height: number;
	previous: string;
	forged: {
		reward: number;
		fee: number;
		total: number;
		amount: number;
	};
	payload: {
		username?: string;
		hash: string;
		length: number;
	};
	generator: {
		username: string;
		address: string;
		publicKey: string;
	};
	signature: string;
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
	id?: string;
	version?: number;
	timestamp?: number;
	previousBlock?: string;
	/** The height of the block to be retrieved. */
	height?: number;
	numberOfTransactions?: number;
	totalAmount?: number;
	totalFee?: number;
	reward?: number;
	payloadLength?: number;
	payloadHash?: number;
	generatorPublicKey?: string;
	blockSignature?: string;
}

export interface TransactionsInBlockApiQuery extends ApiQuery {
	/** Type by which it orders transactions of a block. */
	orderBy?: string;
	id?: string;
	blockId?: string;
	type?: number;
	version?: number;
	senderPublicKey?: string;
	senderId?: string;
	recipientId?: string;
	timestamp?: number;
	amount?: number;
	fee?: number;
	vendorField?: string;
}
