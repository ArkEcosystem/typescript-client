import { ApiResponse } from "../interfaces";
import { Resource } from "./resource";

export class Rounds extends Resource {
	/**
	 * List rounds data
	 *
	 * @param roundNumber The number of wanted round.
	 */
	public async delegates(roundNumber: number): Promise<ApiResponse<{ publicKey: string; votes: string }[]>> {
		return this.sendGet(`rounds/${roundNumber}/delegates`);
	}
}
