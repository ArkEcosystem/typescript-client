import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces";
import {
	AllDelegatesApiQuery,
	DelegateBlocksApiQuery,
	DelegateVotersApiQuery,
	SearchDelegatesApiBody,
	Delegate,
	Voter,
} from "../resourcesTypes/delegates";
import { Resource } from "./resource";
import { Block } from "..";

/**
 * Delegates are regular wallets (addresses) which have registered themselves eligible to become a Delegate by a registration transaction.
 *
 * If a Delegate is amongst the top 51 highest voted \(by staked ARK\), it may run a forging Node, which produces a block once every 6.8 minutes, awarding the Delegate two ARK + the transaction fees.
 *
 * Genesis Delegates are the initial, virtualized Delegates.
 * They were not registered nor voted in, and in the ARK `mainnet` has been replaced by actual Delegates a long time ago.
 */
export class Delegates extends Resource {
	/**
	 * List All Delegates
	 *
	 * You can obtain all Delegates through this paginated API. Note that all registered Delegates are returned in this response, not just the top 51 forging Delegates.
	 *
	 * If a Delegate Node is offline, it is still returned through this API; as the `delegate` resource is not concerned with the actual nodes, only with the on-chain registrations and wallets.
	 */
	public async all(query?: AllDelegatesApiQuery): Promise<ApiResponseWithPagination<Delegate[]>> {
		return this.sendGet("delegates", query);
	}

	/**
	 * Retrieve a Delegate
	 *
	 * You can query for a specific delegate by username, address, and public key; thus the following queries will result in an identical response.
	 *
	 * Note that public keys are always known for delegates, as they have previously transmitted a registration transaction. This is not the case for regular wallets.
	 *
	 * @param usernameOrAddressOrPublicKey The identifier of the delegate to be retrieved.
	 */
	public async get(usernameOrAddressOrPublicKey: string): Promise<ApiResponse<Delegate>> {
		return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}`);
	}

	/**
	 * List All Blocks of a Delegate
	 *
	 * The `delegate` resource allows you to obtain blocks from a specific Delegate.
	 *
	 * This is the equivalent of searching for blocks using the `generatorPublicKey`.
	 *
	 * @param usernameOrAddressOrPublicKey The identifier of the delegate to be retrieved.
	 */
	public async blocks(
		usernameOrAddressOrPublicKey: string,
		query?: DelegateBlocksApiQuery,
	): Promise<ApiResponseWithPagination<Block[]>> {
		return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}/blocks`, query);
	}

	/**
	 * List All Voters of a Delegate
	 *
	 * Obtaining the voters of a Delegate is trivial as well. This endpoint returns **active** voters. To acquire historical voters, it is better to query the database directly.
	 *
	 * @param usernameOrAddressOrPublicKey The identifier of the delegate to be retrieved.
	 */
	public async voters(
		usernameOrAddressOrPublicKey: string,
		query?: DelegateVotersApiQuery,
	): Promise<ApiResponseWithPagination<Voter[]>> {
		return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}/voters`, query);
	}

	/**
	 * Search for a Delegate
	 *
	 * For fine-grained searches, use the search endpoint.
	 */
	public async search(payload?: SearchDelegatesApiBody, query?: ApiQuery): Promise<ApiResponseWithPagination<Delegate[]>> {
		return this.sendPost("delegates/search", payload, query);
	}
}
