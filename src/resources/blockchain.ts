import { Resource } from "./resource";
import { ApiResponse } from "../interfaces";

/**
 * Retrieve Blockchain State
 */
export class Blockchain extends Resource {
	/**
	 * Used to get the latest block and supply of the blockchain.
	 */
	public async index(): Promise<ApiResponse<Blockchain>> {
		return this.sendGet("blockchain");
	}
}
