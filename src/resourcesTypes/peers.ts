import { ApiQuery } from "../interfaces";

export interface AllPeersApiQuery extends ApiQuery {
	/** The port by which the resources will be filtered. */
	port?: number;
	/** The status by which the resources will be filtered. */
	status?: string;
	/** The operating system by which the resources will be filtered. */
	os?: string;
	/** The node version by which the resources will be filtered. */
	version?: string;
	/** The column by which the resources will be sorted. */
	orderBy?: string;
}
