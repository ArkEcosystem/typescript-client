import { ApiResponseWithPagination } from "../interfaces";
import { Resource } from "./resource";
import {
	AllBridgechainsApiQuery,
	SearchBridgechainsApiBody,
	SearchBridgechainsApiQuery,
	Bridgechain,
} from "../resourcesTypes";

export class Bridgechains extends Resource {
	/**
	 * List all bridgechains
	 *
	 * Returns a list of all registered bridgechains on the network.
	 */
	public async all(query?: AllBridgechainsApiQuery): Promise<ApiResponseWithPagination<Bridgechain[]>> {
		return this.sendGet("bridgechains", query);
	}

	/**
	 * Search bridgechains
	 */
	public async search(
		payload?: SearchBridgechainsApiBody,
		query?: SearchBridgechainsApiQuery,
	): Promise<ApiResponseWithPagination<Bridgechain[]>> {
		return this.sendPost("bridgechains/search", payload, query);
	}
}
