import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Transactions extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("transactions", query);
	}

	public async create<T = any>(payload: object[]): Promise<IResponse<T>> {
		return this.sendPost("transactions", payload);
	}

	public async get<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`transactions/${id}`);
	}

	public async allUnconfirmed<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("transactions/unconfirmed", query);
	}

	public async getUnconfirmed<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`transactions/unconfirmed/${id}`);
	}

	public async search<T = any>(payload: Record<string, any>): Promise<IResponse<T>> {
		return this.sendPost("transactions/search", payload);
	}

	public async types<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("transactions/types");
	}

	public async fees<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("transactions/fees");
	}
}
