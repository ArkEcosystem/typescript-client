import { IResponse } from "../interfaces";
import {
	AllBridgechainsApiQuery,
	SearchBridgechainsApiBody,
	SearchBridgechainsApiQuery,
} from "../resourcesTypes/bridgechains";
import { Resource } from "./resource";

export class Bridgechains extends Resource {
	/**
	 * List all bridgechains
	 *
	 * Returns a list of all registered bridgechains on the network.
	 */
	public async all<T = any>(query?: AllBridgechainsApiQuery): Promise<IResponse<T>> {
		return this.sendGet("bridgechains", query);
	}

	/**
	 * Search bridgechains
	 */
	public async search<T = any>(
		payload?: SearchBridgechainsApiBody,
		query?: SearchBridgechainsApiQuery,
	): Promise<IResponse<T>> {
		return this.sendPost("bridgechains/search", payload, query);
	}
}
