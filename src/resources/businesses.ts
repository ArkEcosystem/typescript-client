import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { Resource } from "./resource";
import {
	AllBusinessesApiQuery,
	BusinessBridgechainsApiQuery,
	SearchBusinesssApiBody,
	SearchBusinesssApiQuery,
	Business,
	Bridgechain,
} from "../resourcesTypes";

export class Businesses extends Resource {
	/**
	 * List all businesses
	 */
	public async all(query?: AllBusinessesApiQuery): Promise<ApiResponseWithPagination<Business[]>> {
		return this.sendGet("businesses", query);
	}

	/**
	 * Return business by wallet address
	 *
	 * @param walletAddress The identifier of the wallet to be retrieved.
	 */
	public async get(walletAddress: string): Promise<ApiResponse<Business>> {
		return this.sendGet(`businesses/${walletAddress}`);
	}

	/**
	 * Return bridgechains of a business
	 *
	 * @param walletAddress The identifier of the wallet to be retrieved.
	 */
	public async bridgechains(
		walletAddress: string,
		query?: BusinessBridgechainsApiQuery,
	): Promise<ApiResponseWithPagination<Bridgechain[]>> {
		return this.sendGet(`businesses/${walletAddress}/bridgechains`, query);
	}

	/**
	 * Return bridgechain of a business by genesis hash
	 *
	 * @param walletAddress The identifier of the wallet to be retrieved.
	 * @param genesisHash The genesis hash of the bridgechain to be retrieved.
	 */
	public async bridgechain(walletAddress: string, genesisHash: string): Promise<ApiResponse<Bridgechain>> {
		return this.sendGet(`businesses/${walletAddress}/bridgechains/${genesisHash}`);
	}

	/**
	 * Search business
	 */
	public async search(
		payload?: SearchBusinesssApiBody,
		query?: SearchBusinesssApiQuery,
	): Promise<ApiResponseWithPagination<Business[]>> {
		return this.sendPost("businesses/search", payload, query);
	}
}
