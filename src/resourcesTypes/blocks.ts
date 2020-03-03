import { ApiBody, ApiQuery } from "../interfaces";

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

export interface SearchBlockApiBody extends ApiBody {
	/** ID of the block. */
	id?: string;
	/** Version of the block. */
	version?: number;
	/** ID of the previous block. */
	previousBlock?: number;
	/** Hash of the payload. */
	payloadHash?: string;
	/** Public key of the forger who forged the block. */
	generatorPublicKey?: string;
	/** Signature of the block. */
	blockSignature?: string;
	/** Timestamp range for block creation time. Measured in number of seconds since the genesis block. */
	timestamp?: {
		/** Block creation time must be bigger or equal to this. */
		from?: number;
		/** Block creation time must be smaller or equal to this. */
		to?: number;
	};
	/** Height range of the block. The genesis block has height 1. */
	height?: {
		/** Block height must be bigger or equal to this. */
		from?: number;
		/** Block height must be smaller or equal to this. */
		to?: number;
	};
	/** Ranage for number of transactions contained in the block. */
	numberOfTransactions?: {
		/** The number of transactions in the block must be bigger or equal to this. */
		from?: number;
		/** The number of transactions in the block must be smaller or equal to this. */
		to?: number;
	};
	/** Range for total amount transacted in the block, including block reward, transaction fees and transactions' amounts. In arktoshi. */
	totalAmount?: {
		/** Block total amount must be bigger or equal to this. */
		from?: number;
		/** Block total amount must be smaller or equal to this. */
		to?: number;
	};
	/** Range for the sum of all transactions' fees in the block. In arktoshi. */
	totalFee?: {
		/** The sum of all transactions' fees in the block must be bigger or equal to this. */
		from?: number;
		/** The sum of all transactions' fees in the block must be smaller or equal to this. */
		to?: number;
	};
	/** Range for block reward. In arktoshi. */
	reward?: {
		/** Block reward must be bigger or equal to this. */
		from?: number;
		/** Block reward must be smaller or equal to this. */
		to?: number;
	};
	/** Range for block payload length. In bytes. */
	payloadLength?: {
		/** Block payload length must be bigger or equal to this. */
		from?: number;
		/** Block payload length must be smaller or equal to this. */
		to?: number;
	};
}
