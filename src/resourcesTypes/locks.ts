import { ApiBody, ApiQuery } from "../interfaces";

export interface Lock {
	lockId: string;
	senderPublicKey: string;
	isExpired: boolean;
	amount: string;
	secretHash: string;
	recipientId: string;
	timestamp: {
		epoch: number;
		unix: number;
		human: string;
	};
	expirationType: number;
	expirationValue: number;
	vendorField: string;
}

export interface AllLocksApiQuery extends ApiQuery {
	/** Type by which it orders locks. */
	lockId?: string;
	senderPublicKey?: string;
	isExpired?: boolean;
	amount?: string;
	secretHash?: string;
	recipientId?: string;
	timestamp?: {
		epoch?: number;
		unix?: number;
		human?: string;
	};
	expirationType?: number;
	expirationValue?: {
		from?: number;
		to?: number;
	};
	vendorField: string;
}

export interface SearchLocksUnlockedApiQuery extends ApiQuery {
	/** Type by which it orders locks. */
	orderBy?: string;
}

export interface SearchLocksUnlockedApiBody extends ApiBody {
	/** Array of lock ids. */
	ids?: string[];
}
