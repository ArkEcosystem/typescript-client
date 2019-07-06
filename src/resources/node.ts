import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Node extends Resource {
	public async status<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/status");
	}

	public async syncing<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/syncing");
	}

	public async configuration<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/configuration");
	}

	public async fees<T = any>(days: number): Promise<IResponse<T>> {
		return this.sendGet("node/fees", {
			days,
		});
	}
}
