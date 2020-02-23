import { ApiBody, ApiQuery } from "../interfaces";

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
	senderPublicKey?: string;
	senderId?: string;
	recipientId?: string;
	ownerId?: string;
	vendorFieldHex?: string;
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
