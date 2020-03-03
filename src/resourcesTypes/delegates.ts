import { ApiBody, ApiQuery } from "../interfaces";

export interface Delegate {
	username: string;
	address: string;
	publicKey: string;
	votes: number;
	rank: number;
	blocks: {
		produced: number;
		missed: number;
		last?: {
			id: string;
			height: number;
			timestamp: {
				epoch: number;
				unix: number;
				human: string;
			};
		};
	};
	production: {
		approval: number;
		productivity?: number;
	};
	forged: {
		fees: number;
		rewards: number;
		total: number;
	};
}

export interface Voter {
	address: string;
	publicKey: string;
	username?: string;
	secondPublicKey?: string;
	balance: number;
	isDelegate: boolean;
	vote: string;
}

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

export interface SearchDelegatesApiBody extends ApiBody {
	/** The address of the delegate to be retrieved. */
	address?: string;
	/** The public key of the delegate to be retrieved. */
	publicKey?: string;
	/** The username of the delegate to be retrieved. */
	username?: string;
	/** The usernames of the delegates to be retrieved. */
	usernames?: string[];
	/** The approval rate of the delegates to be retrieved. */
	approval?: {
		/** The lower limit of the approval rate. */
		from?: number;
		/** The upper limit of the approval rate. */
		to?: number;
	};
	/** The forged fees of the delegates to be retrieved. */
	forgedFees?: {
		/** The lower limit of the forged fees. */
		from?: number;
		/** The upper limit of the forged fees. */
		to?: number;
	};
	/** The forged rewards of the delegates to be retrieved. */
	forgedRewards?: {
		/** The lower limit of the forged rewards. */
		from?: number;
		/** The upper limit of the forged rewards. */
		to?: number;
	};
	/** The forged total of the delegates to be retrieved. */
	forgedTotal?: {
		/** The lower limit of the forged total. */
		from?: number;
		/** The upper limit of the forged total. */
		to?: number;
	};
	/** The produced blocks count of the delegates to be retrieved. */
	producedBlocks?: {
		/** The lower limit of the produced blocks count. */
		from?: number;
		/** The upper limit of the produced blocks count. */
		to?: number;
	};
	/** The vote balance of the delegates to be retrieved. */
	voteBalance?: {
		/** The lower limit of the vote balance. */
		from?: number;
		/** The upper limit of the vote balance. */
		to?: number;
	};
}
