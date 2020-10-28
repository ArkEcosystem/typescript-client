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
	"balance.from"?: number;
	"balance.to"?: number;
	"nonce.from"?: number;
	"nonce.to"?: number;
	attributes?: object;
}

export interface WalletsLockApiQuery extends ApiQuery {
	lockId?: string;
	senderPublicKey?: string;
	isExpired?: boolean;
	amount?: string;
	secretHash?: string;
	recipientId?: string;
	"blocks.last.timestamp.epoch.from"?: number;
	"blocks.last.timestamp.epoch.to"?: number;
	"blocks.last.timestamp.unix.from"?: number;
	"blocks.last.timestamp.unix.to"?: number;
	"blocks.last.timestamp.human"?: string;
}

export interface WalletsTransactionsApiQuery extends ApiQuery {
	address?: string;
	senderId?: string;
	recipientId?: string;
	id?: number;
	version?: number;
	blockId?: number;
	"sequence.from"?: number;
	"sequence.to"?: number;
	"timestamp.from"?: number;
	"timestamp.to"?: number;
	"nonce.from"?: number;
	"nonce.to"?: number;
	senderPublicKey?: string;
	type?: number;
	typeGroup?: number;
	vendorField?: string;
	"amount.from"?: number;
	"amount.to"?: number;
	"fee.from"?: number;
	"fee.to"?: number;
	asset?: object;
}
