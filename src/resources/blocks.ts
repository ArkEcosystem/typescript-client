import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Blocks extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("blocks", query);
	}

	public async get<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`blocks/${id}`);
	}

	public async transactions<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet(`blocks/${id}/transactions`, query);
	}

	public async search<T = any>(payload?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendPost("blocks/search", payload);
	}
}
