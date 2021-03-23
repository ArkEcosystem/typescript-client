import { ApiBody, ApiQuery } from "../interfaces";

export interface Lock {
	lockId: string;
	amount: string;
	secretHash: string;
	senderPublicKey: string;
	recipientId: string;
	timestamp: {
		epoch: number;
		unix: number;
		human: string;
	};
	expirationType: number;
	expirationValue: number;
	isExpired: boolean;
	vendorField: string;
}

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

export interface SearchLocksUnlockedApiQuery extends ApiQuery {
	/** Type by which it orders locks. */
	orderBy?: string;
}

export interface SearchLocksUnlockedApiBody extends ApiBody {
	/** Array of lock ids. */
	ids?: string[];
}
