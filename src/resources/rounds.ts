import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Rounds extends Resource {
	/**
	 * List rounds data
	 *
	 * @param roundNumber The number of wanted round.
	 */
	public async delegates<T = any>(roundNumber: number): Promise<IResponse<T>> {
		return this.sendGet(`rounds/${roundNumber}/delegates`);
	}
}
