import { ApiQuery } from "../interfaces";

export interface Peer {
	ip: string;
	port: number;
	ports: Record<string, number>;
	version: string;
	height: number;
	latency: number;
	plugins: Record<string, object>;
}

export interface AllPeersApiQuery extends ApiQuery {
	/** The ip address by which the resources will be filtered. */
	ip?: string;
	/** The node version by which the resources will be filtered. */
	version?: string;
	/** The column by which the resources will be sorted. */
	orderBy?: string;
}
