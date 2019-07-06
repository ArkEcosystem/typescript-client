import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Delegates extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("delegates", query);
	}

	public async get<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`delegates/${id}`);
	}

	public async blocks<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet(`delegates/${id}/blocks`, query);
	}

	public async voters<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet(`delegates/${id}/voters`, query);
	}
}
