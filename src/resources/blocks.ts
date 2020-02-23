import { ApiQuery, IResponse } from "../interfaces";
import { AllBlockApiQuery, SearchAllBlockApiBody, TransactionsInBlockApiQuery } from "../resourcesTypes/blocks";
import { Resource } from "./resource";

export class Blocks extends Resource {
	public async all<T = any>(query?: AllBlockApiQuery): Promise<IResponse<T>> {
		return this.sendGet("blocks", query);
	}

	public async first<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("blocks/first");
	}

	public async last<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("blocks/last");
	}

	public async get<T = any>(idOrHeight: string): Promise<IResponse<T>> {
		return this.sendGet(`blocks/${idOrHeight}`);
	}

	public async transactions<T = any>(idOrHeight: string, query?: TransactionsInBlockApiQuery): Promise<IResponse<T>> {
		return this.sendGet(`blocks/${idOrHeight}/transactions`, query);
	}

	public async search<T = any>(payload?: SearchAllBlockApiBody, query?: ApiQuery): Promise<IResponse<T>> {
		return this.sendPost("blocks/search", payload, query);
	}
}
