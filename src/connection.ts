import isUrl from "is-url-superb";
import ky, { Options as kyOptions } from "ky-universal";
import { RequestError } from "./errors";
import { IResponse } from "./interfaces";
import { AvailableResource, AvailableResourcesName, Resources } from "./resources";

export class Connection {
	private opts: Record<string, any>;

	public constructor(private readonly host: string) {
		if (!isUrl(host)) {
			throw new Error(`${host} is not a valid URL.`);
		}
	}

	public api<T extends AvailableResourcesName>(name: T) {
		const selectedResourceClass = Resources[name];
		return new selectedResourceClass(this) as AvailableResource<T>;
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

	private async sendRequest<T>(method: kyOptions["method"], url: string, opts?: Record<string, any>): Promise<IResponse<T>> {
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
			const response = await ky(`${this.host}/${url}`, { ...opts, method });

			return {
				body: await response.json(),
				headers: response.headers as any as IResponse<T>["headers"],
				status: response.status,
			};
		} catch (error) {
			throw new RequestError(error);
		}
	}
}
