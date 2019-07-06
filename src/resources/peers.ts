import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Peers extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("peers", query);
	}

	public async get<T = any>(ip: string): Promise<IResponse<T>> {
		return this.sendGet(`peers/${ip}`);
	}
}
