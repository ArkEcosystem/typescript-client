import { ApiQuery } from "../interfaces";

export interface Wallet {
	address: string;
	publicKey: string;
	secondPublicKey?: string;
	nonce: string;
	balance: string;
	username?: string;
	vote?: string;
	attributes: {
		secondPublicKey?: string;
		vote?: string;
		delegate?: {
			username: string;
			voteBalance: string;
			forgedFees: string;
			forgedRewards: string;
			producedBlocks: number;
			rank: number;
			lastBlock: {
				version: number;
				timestamp: number;
				height: number;
				previousBlockHex: string;
				previousBlock: string;
				numberOfTransactions: number;
				totalAmount: string;
				totalFee: string;
				reward: string;
				payloadLength: number;
				payloadHash: string;
				generatorPublicKey: string;
				blockSignature: string;
				idHex: string;
				id: string;
			};
			round: number;
		};
		htlc?: {
			locks: {};
			lockedBalance: string;
		};
		votes?: string[];
	} & Record<string, any>;
	lockedBalance?: string;
	isDelegate: boolean;
	isResigned: boolean;
}

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
