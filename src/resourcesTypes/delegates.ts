import { ApiBody, ApiQuery } from "../interfaces";

export interface AllDelegatesApiQuery extends ApiQuery {
	/** Type by which it orders delegates. */
	orderBy?: string;
	type?: "resigned" | "never-forged";
	address?: string;
	publicKey?: string;
	secondPublicKey?: string;
	vote?: string;
	username?: string;
	balance?: number;
	voteBalance?: number;
	producedBlocks?: number;
}

export interface DelegateBlocksApiQuery extends ApiQuery {
	/** Type by which it orders blocks. */
	orderBy?: string;
	id?: string;
	version?: number;
	timestamp?: number;
	previousBlock?: string;
	height?: number;
	numberOfTransactions?: number;
	totalAmount?: number;
	totalFee?: number;
	reward?: number;
	payloadLength?: number;
	payloadHash?: string;
	generatorPublicKey?: string;
	blockSignature?: string;
}

export interface DelegateVotersApiQuery extends ApiQuery {
	/** Type by which it order voters. */
	orderBy?: string;
	address?: string;
	publicKey?: string;
	secondPublicKey?: string;
	vote?: string;
	username?: string;
	balance?: number;
	voteBalance?: number;
	producedBlocks?: number;
}
