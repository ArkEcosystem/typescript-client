import { Resource } from "./resource";
import { ApiResponse } from "../interfaces";
import { Blockchain as BlockchainResource } from "../resourcesTypes";

export class Blockchain extends Resource {
	public async index(): Promise<ApiResponse<BlockchainResource>> {
		return this.sendGet("blockchain");
	}
}
