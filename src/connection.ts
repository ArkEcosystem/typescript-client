import got from "got";
import isUrl from "is-url-superb";
import { RequestError } from "./errors";
import { IResponse } from "./interfaces";
import { Resources } from "./resources";

export class Connection {
	private opts: Record<string, any>;

	public constructor(private readonly host: string) {
		if (!isUrl(host)) {
			throw new Error(`${host} is not a valid URL.`);
		}
	}

	public api<T = any>(name: string): T {
		name = name.charAt(0).toUpperCase() + name.slice(1);

		// @ts-ignore
		return new Resources[name](this);
	}

	public withOptions(opts: Record<string, any>): this {
		this.opts = opts;

		return this;
	}

	public async get<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendRequest("get", url, opts);
	}

	public async post<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>> {
		return this.sendRequest("post", url, opts);
	}

	private async sendRequest<T>(method: string, url: string, opts?: Record<string, any>): Promise<IResponse<T>> {
		opts = { ...this.opts, ...(opts || {}) };

		if (opts.body && typeof opts !== "string") {
			// @ts-ignore
			opts.body = JSON.stringify(opts.body);
		}

		// Do not retry unless explicitly stated.
		if (!opts.retry) {
			opts.retry = { retries: 0 };
		}

		if (!opts.timeout) {
			opts.timeout = 1500;
		}

		try {
			// @ts-ignore
			const { body, headers, statusCode } = await got[method](`${this.host}/${url}`, opts);

			return {
				body: JSON.parse(body),
				headers,
				status: statusCode,
			};
		} catch (error) {
			throw new RequestError(error);
		}
	}
}
