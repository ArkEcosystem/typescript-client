import { Resource } from "./resource";
import { ApiResponse } from "../interfaces";
import { Blockchain as BlockchainResource } from "../resourcesTypes";
/**
 * Retrieve Blockchain State
 */
export class Blockchain extends Resource {
	/**
	 * Used to get the latest block and supply of the blockchain.
	 */
	public async index(): Promise<ApiResponse<BlockchainResource>> {
		return this.sendGet("blockchain");
	}
}
