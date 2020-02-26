import { ApiBody, ApiQuery } from "../interfaces";

export class Business {
	address: string;
	publicKey: string;
	name: string;
	website: string;
	vat: string;
	repository: string;
	isResigned: true;
}

export interface AllBusinessesApiQuery extends ApiQuery {
	/** Type by which it orders businesses. */
	orderBy?: string;
	/** The publicKey of a transaction which submitted the business. */
	publicKey?: string;
	/** If business is resigned or not. */
	isResigned?: boolean;
}

export interface BusinessBridgechainsApiQuery extends ApiQuery {
	/** Type by which it orders business. */
	orderBy?: string;
	/** If business is resigned or not. */
	isResigned?: boolean;
}

export interface SearchBusinesssApiQuery extends ApiQuery {
	/** Type by which it orders business. */
	orderBy?: string;
}
export interface SearchBusinesssApiBody extends ApiBody {
	address?: string;
	publicKey?: string;
	name?: string;
	website?: string;
	vat?: string;
	repository?: string;
	isResigned?: boolean;
}
