import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Bridgechains extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("bridgechains", query);
	}

	public async get<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`bridgechains/${id}`);
	}

	public async search<T = any>(payload?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendPost("bridgechains/search", payload);
	}
}
