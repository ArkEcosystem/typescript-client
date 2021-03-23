import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import {
	AllLocksApiQuery,
	SearchLocksUnlockedApiBody,
	SearchLocksUnlockedApiQuery,
	Lock,
} from "../resourcesTypes/locks";
import { Resource } from "./resource";
import { Transaction } from "../resourcesTypes";

/**
 * /!\ This endpoints return HTLC Locks. HTLC Locks are not operational on Mainnet.
 */
export class Locks extends Resource {
	/**
	 * List all locks
	 */
	public async all(query?: AllLocksApiQuery): Promise<ApiResponseWithPagination<Lock[]>> {
		return this.sendGet("locks", query);
	}

	/**
	 * Return lock by id
	 * @param id Lock id
	 */
	public async get(id: string): Promise<ApiResponse<Lock>> {
		return this.sendGet(`locks/${id}`);
	}

	/**
	 * Search unlocked
	 */
	public async unlocked(
		payload?: SearchLocksUnlockedApiBody,
		query?: SearchLocksUnlockedApiQuery,
	): Promise<ApiResponseWithPagination<Transaction[]>> {
		return this.sendPost("locks/unlocked", payload, query);
	}
}
