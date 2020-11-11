// @ts-ignore - Could not find a declaration file for module 'node-dotify'.
import dotify from "node-dotify"

import { Connection } from "../connection";
import { IResponse } from "../interfaces";

export class Resource {
	private opts: Record<string, any> = {};

	public constructor(protected readonly connection: Connection) {}

	public withOptions(opts: Record<string, any>): this {
		this.opts = opts;

		return this;
	}

	public resetOptions(): this {
		this.opts = {};

		return this;
	}

	public async sendGet<T = any>(url: string, query?: Record<string, any>): Promise<IResponse<T>> {
        let response;

        if (query !== undefined) {
            response = await this.connection.get(url, { ...this.opts, ...{ searchParams: dotify(query) } });
        } else {
            response = await this.connection.get(url, this.opts);
        }

		this.resetOptions();

		return response;
	}

	public async sendPost<T = any>(
		url: string,
		body?: Record<string, any>,
		query?: Record<string, any>,
	): Promise<IResponse<T>> {
        let response;

        if (query !== undefined) {
            response = await this.connection.post(url, { ...this.opts, ...{ body }, ...{ searchParams: dotify(query) } });
        } else {
            response = await this.connection.post(url, { ...this.opts, ...{ body } });
        }

		this.resetOptions();

		return response;
	}
}
