import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Blocks extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.connection.get("blocks", query);
	}

	public async get<T = any>(id: string): Promise<IResponse<T>> {
		return this.connection.get(`blocks/${id}`);
	}

	public async transactions<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.connection.get(`blocks/${id}/transactions`, query);
	}

	public async search<T = any>(payload?: Record<string, any>): Promise<IResponse<T>> {
		return this.connection.post("blocks/search", payload);
	}
}
