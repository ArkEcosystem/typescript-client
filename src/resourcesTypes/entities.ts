import { ApiQuery } from "../interfaces";

export interface Entity {
	id: string;
	address: string;
	publicKey: string;
	isResigned: boolean;
	type: number;
	subType: number;
	data: {
		name?: string;
		ipfsData?: string;
	};
}

export interface AllEntitiesApiQuery extends ApiQuery {
	id?: string;
	publicKey?: string;
	address?: string;
	isResigned?: boolean;
	type?: number;
	subType?: number;
	data?: {
		name?: string;
		ipfsData?: string;
	};
}
