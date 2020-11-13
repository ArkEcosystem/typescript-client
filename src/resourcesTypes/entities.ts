import { ApiQuery } from "../interfaces";

export interface Entity {
    id?: string;
    address?: string;
    publicKey?: string;
    isResigned?: boolean;
    type?: number;
    subType?: number;
    data: {
        name?: string;
        ipfsData?: string;
    };
}

export interface AllEntitiesApiQuery extends ApiQuery {
    /** Type by which it orders entities. */
    orderBy?: string;
    publicKey?: string;
    type?: number;
    subType?: number;
    name?: string;
    isResigned?: boolean;
}
