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
		const dotNotationQuery: any = {};
		const loopTrueObjects = (object: any, dotedParameter: string) => {
			for (const key of Object.keys(object)) {
				const objectProperty = object[key];
				if (Object.keys(objectProperty).length > 0 && !objectProperty.hasOwnProperty("0")) {
					loopTrueObjects(objectProperty, `${dotedParameter}.${key}`);
				} else {
					dotNotationQuery[`${dotedParameter}.${key}`.substring(1)] = objectProperty;
				}
			}
		};
		loopTrueObjects(query, "");

		const response = await this.connection.get(url, { ...this.opts, ...{ searchParams: dotNotationQuery } });

		this.resetOptions();

		return response;
	}

	public async sendPost<T = any>(
		url: string,
		body?: Record<string, any>,
		query?: Record<string, any>,
	): Promise<IResponse<T>> {
		const response = await this.connection.post(url, { ...this.opts, ...{ body }, ...{ searchParams: query } });

		this.resetOptions();

		return response;
	}
}
