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
	"timestamp.from"?: number;
	"timestamp.to"?: number;
	previousBlock?: string[];
	/** The height of the block to be retrieved. */
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
	"sequence.from"?: number;
	"sequence.to"?: number;
	"timestamp.from"?: number;
	"timestamp.to"?: number;
	"nonce.from"?: number;
	"nonce.to"?: number;
	senderPublicKey?: string[];
	type?: number[];
	typeGroup?: number[];
	vendorField?: string[];
	"amount.from"?: number;
	"amount.to"?: number;
	"fee.from"?: number;
	"fee.to"?: number;
	asset?: object[];
}
