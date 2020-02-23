import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Blocks extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("blocks", query);
	}

	public async first<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("blocks/first");
	}

	public async last<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("blocks/last");
	}
	}

	public async transactions<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet(`blocks/${id}/transactions`, query);
	}

	public async search<T = any>(payload?: Record<string, any>, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendPost("blocks/search", payload, query);
	}
}
