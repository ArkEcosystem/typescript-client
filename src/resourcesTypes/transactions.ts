import { ApiQuery } from "../interfaces";

export interface Transaction {
	id: string;
	blockId: string;
	version: number;
	type: number;
	typeGroup: number;
	amount: string;
	fee: string;
	sender: string;
	senderPublicKey: string;
	recipient: string;
	asset?: TransactionAssets;
	signature: string;
	signSignature?: string;
	vendorField?: string;
	confirmations: number;
	timestamp: {
		epoch: number;
		unix: number;
		human: string;
	};
	nonce: string;
}

export type TransactionAssets = {
	signature?: {
		publicKey: string;
	};
	delegate?: {
		username: string;
	};
	votes?: string[];
	multiSignature?: {
		publicKeys: string[];
		min: string;
	};
	ipfs?: string;
	payments?: {
		amount: string;
		recipientId: string;
	}[];
	lock?: {
		secretHash: string;
		expiration: {
			type: number;
			value: number;
		};
	};
	claim?: {
		lockTransactionId: string;
		unlockSecret: string;
	};
	refund?: {
		lockTransactionId: string;
	};
} & Record<string, any>;

export interface CreateTransactionApiResponse {
	accept: string[];
	broadcast: string[];
	excess: string[];
	invalid: string[];
}

export interface TransactionTypes extends Record<number, Record<string, number>> {
	1: {
		Transfer: number;
		SecondSignature: number;
		DelegateRegistration: number;
		Vote: number;
		MultiSignature: number;
		Ipfs: number;
		MultiPayment: number;
		DelegateResignation: number;
		HtlcLock: number;
		HtlcClaim: number;
		HtlcRefund: number;
	};
	2: {
		Entity: number;
	};
}

export interface TransactionFees extends Record<number, Record<string, string>> {
	1: {
		transfer: string;
		secondSignature: string;
		delegateRegistration: string;
		vote: string;
		multiSignature: string;
		ipfs: string;
		multiPayment: string;
		delegateResignation: string;
		htlcLock: string;
		htlcClaim: string;
		htlcRefund: string;
	};
	2: {
		entityRegistration: string;
		entityResignation: string;
		entityUpdate: string;
	};
}

export interface AllTransactionsApiQuery extends ApiQuery {
	address?: string;
	senderId?: string;
	recipientId?: string;
	/** The transaction id to be retrieved. */
	id?: number;
	version?: number;
	/** The block id to be retrieved. */
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
	/** The transaction type to be retrieved. */
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
