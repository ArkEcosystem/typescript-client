import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Rounds extends Resource {
	public async delegates<T = any>(id: number): Promise<IResponse<T>> {
		return this.sendGet(`rounds/${id}/delegates`);
	}
}
