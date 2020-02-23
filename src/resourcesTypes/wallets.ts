import { ApiBody, ApiQuery } from "../interfaces";

export interface AllWalletsApiQuery extends ApiQuery {
	/** Type by which it orders wallets. */
	orderBy?: string;
	address?: string;
	publicKey?: string;
	senderPublicKey?: string;
	vote?: string;
	username?: string;
	balance?: number;
	voteBalance?: number;
	producedBlocks?: number;
}

export interface WalletsTransactionsApiQuery extends ApiQuery {
	id?: string;
	blockId?: string;
	type?: number;
	typeGroup?: number;
	version?: number;
	timestamp?: number;
	nonce?: number;
	amount?: number;
	fee?: number;
	vendorField?: string;
}

export interface WalletsTransactionsReceivedApiQuery extends ApiQuery {
	id?: string;
	blockId?: string;
	type?: number;
	typeGroup?: number;
	version?: number;
	senderPublicKey?: string;
	senderId?: string;
	timestamp?: number;
	nonce?: number;
	amount?: number;
	fee?: number;
	vendorField?: string;
}

export interface WalletsTransactionsSentApiQuery extends ApiQuery {
	/** Type by which it orders wallets. */
	orderBy?: string;
	id?: string;
	blockId?: string;
	type?: number;
	typeGroup?: number;
	version?: number;
	recipientId?: string;
	timestamp?: number;
	nonce?: number;
	amount?: number;
	fee?: number;
	vendorField?: string;
}

export interface SearchWalletsApiBody extends ApiBody {
	address?: string;
	publicKey?: string;
	secondPublicKey?: string;
	vote?: string;
	username?: string;
	balance?: {
		from?: number;
		to?: number;
	};
	votebalance?: {
		from?: number;
		to?: number;
	};
}
