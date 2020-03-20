import { ApiBody, ApiQuery } from "../interfaces";

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
	ipfs?: string;
	votes?: string[];
	delegate?: {
		username: string;
	};
	signature?: {
		publicKey: string;
	};
	multiSignature?: {
		publicKeys: string[];
		min: string;
	};
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
		BusinessRegistration: number;
		BusinessResignation: number;
		BusinessUpdate: number;
		BridgechainRegistration: number;
		BridgechainResignation: number;
		BridgechainUpdate: number;
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
		businessRegistration: string;
		businessResignation: string;
		businessUpdate: string;
		bridgechainRegistration: string;
		bridgechainResignation: string;
		bridgechainUpdate: string;
	};
}

export interface AllTransactionsApiQuery extends ApiQuery {
	/** The transaction type to be retrieved. */
	type?: number;
	/** The block id to be retrieved. */
	blockId?: number;
	/** The transaction id to be retrieved. */
	id?: number;
}

export interface SearchTransactionsApiBody extends ApiBody {
	orderBy?: string;
	id?: string;
	blockId?: string;
	type?: number;
	version?: number;
	network?: number;
	senderPublicKey?: string;
	senderId?: string;
	recipientId?: string;
	ownerId?: string;
	vendorFieldHex?: string;
	asset?: TransactionAssets;
	signature?: string;
	signatures?: string[];
	MultiSignatureAddress?: string;
	timestamp?: {
		from?: number;
		to?: number;
	};
	amount?: {
		from?: number;
		to?: number;
	};
	fee?: {
		from?: number;
		to?: number;
	};
}
