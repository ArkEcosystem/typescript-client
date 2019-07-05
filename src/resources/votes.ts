import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Votes extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("votes", query);
	}

	public async get<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`votes/${id}`);
	}
}
