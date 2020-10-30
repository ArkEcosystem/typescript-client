import { ApiQuery } from "../interfaces";

export interface Wallet {
	address: string;
	publicKey: string;
	balance: string;
	nonce: string;
	attributes: object;
}

export interface AllWalletsApiQuery extends ApiQuery {
	address?: string;
	publicKey?: string;
	balance?: {
		from?: number;
		to?: number;
	};
	nonce?: {
		from?: number;
		to?: number;
	};
	attributes?: object;
}

export interface WalletsLockApiQuery extends ApiQuery {
	lockId?: string;
	senderPublicKey?: string;
	isExpired?: boolean;
	amount?: string;
	secretHash?: string;
	recipientId?: string;
	blocks?: {
		last?: {
			timestamp?: {
				epoch?: {
					from?: number;
					to?: number;
				};
				unix?: {
					from?: number;
					to?: number;
				};
				human?: string;
			};
		};
	};
}

export interface WalletsTransactionsApiQuery extends ApiQuery {
	address?: string;
	senderId?: string;
	recipientId?: string;
	id?: number;
	version?: number;
	blockId?: number;
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
	senderPublicKey?: string;
	type?: number;
	typeGroup?: number;
	vendorField?: string;
	amount?: {
		from?: number;
		to?: number;
	};
	fee?: {
		from?: number;
		to?: number;
	};
	asset?: object;
}
