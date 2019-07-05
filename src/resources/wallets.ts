import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Wallets extends Resource {
	public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("wallets", query);
	}

	public async top<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet("wallets/top", query);
	}

	public async get<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`wallets/${id}`);
	}

	public async transactions<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet(`wallets/${id}/transactions`, query);
	}

	public async transactionsSent<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet(`wallets/${id}/transactions/sent`, query);
	}

	public async transactionsReceived<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendGet(`wallets/${id}/transactions/received`, query);
	}

	public async votes<T = any>(id: string): Promise<IResponse<T>> {
		return this.sendGet(`wallets/${id}/votes`);
	}

	public async search<T = any>(payload: Record<string, any>): Promise<IResponse<T>> {
		return this.sendPost("wallets/search", payload);
	}
}
