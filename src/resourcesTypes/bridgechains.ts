import { ApiBody, ApiQuery } from "../interfaces";

export interface AllBridgechainsApiQuery extends ApiQuery {
	/** Type by which it orders bridgechains. */
	orderBy: string;
	/** The publicKey of a transaction which submitted the bridgechain. */
	publicKey: string;
	/** If bridgechain is resigned or not. */
	isResigned: boolean;
}

export interface SearchBridgechainsApiQuery extends ApiQuery {
	/** Type by which it orders bridgechains. */
	orderBy: string;
}
export interface SearchBridgechainsApiBody extends ApiBody {
	address: string;
	publicKey: string;
	bridgechainRepository: string;
	genesisHash: string;
	name: string;
	seedNodes: string[];
	isResigned: boolean;
}
