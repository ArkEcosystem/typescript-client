import { ApiQuery, ApiResponse } from "../interfaces";
import { Resource } from "./resource";
import { Transaction } from "../resourcesTypes";

/**
 * A vote is a specific type of transaction (type 3).
 *
 * A wallet votes on a different wallet, which has registered itself eligible to become a Delegate.
 *
 * Wallets may vote for themselves.
 *
 * > Users are often confused by the voting mechanism and the fee associated with a vote. A Delegate does **not** receive ARK from their voters, nor is the number of blocks they produce proportional to their voting weight.
 */
export class Votes extends Resource {
	/**
	 * List All Votes
	 */
	public async all(query?: ApiQuery): Promise<ApiResponse<Transaction>> {
		return this.sendGet("votes", query);
	}

	/**
	 * Retrieve a Vote
	 *
	 * Votes may be retrieved using their transaction ID.
	 *
	 * Note the `asset` field, which contains the `votes` object.
	 *
	 * The first character of each item in the array indicates if it was a vote: `+`, or unvote: `-`, followed by the public key of the Delegate.
	 *
	 * @param id The identifier of the vote to be retrieved.
	 */
	public async get(id: string): Promise<ApiResponse<Transaction>> {
		return this.sendGet(`votes/${id}`);
	}
}
