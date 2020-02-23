import { ApiBody, ApiQuery } from "../interfaces";

export interface AllLocksApiQuery extends ApiQuery {
	/** Type by which it orders locks. */
	orderBy?: string;
	recipientId?: string;
	senderPublicKey?: string;
	lockId?: string;
	secretHash?: string;
	amount?: number;
	expirationValue?: number;
	expirationType?: number;
	isExpired?: boolean;
}

export interface SearchLocksApiQuery extends ApiQuery {
	/** Type by which it orders locks. */
	orderBy?: string;
}

export interface SearchLocksApiBody extends ApiBody {
	recipientId?: string;
	senderPublicKey?: string;
	lockId?: string;
	secretHash?: string;
	amount?: number;
	timestamp?: number;
	vendorField?: string;
	expirationType?: number;
	expirationValue?: number;
	isExpired?: boolean;
}

export interface SearchLocksUnlockedApiQuery extends ApiQuery {
	/** Type by which it orders locks. */
	orderBy?: string;
}

export interface SearchLocksUnlockedApiBody extends ApiBody {
	/** Array of lock ids. */
	ids?: string[];
}
