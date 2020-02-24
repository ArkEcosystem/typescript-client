import { IResponse } from "../interfaces";
import { Resource } from "./resource";

/**
 * The `node` resource is useful for service discovery, health checks, and obtaining network configurations, such as fees, API, and token information.
 *
 * > Note that these parameters are returned by the specific Node and that other nodes might adhere to a different set of parameters.
 */
export class Node extends Resource {
	/**
	 * Retrieve the Configuration
	 *
	 * Used to access a Node's configuration and the network it is attached to (identified by the `nethash`).
	 */
	public async configuration<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/configuration");
	}

	/**
	 * Retrieve the Cryptography Configuration
	 *
	 * Used to access a Node's configuration for the `@arkecosystem/crypto` package that handles all cryptography operations.
	 */
	public async crypto<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/configuration/crypto");
	}

	/**
	 * Retrieve the Fee Statistics
	 *
	 * Used to access a Node's fee statistics.
	 *
	 * @param days The number of days which will be regarded.
	 */
	public async fees<T = any>(days: number): Promise<IResponse<T>> {
		return this.sendGet("node/fees", { days });
	}

	/**
	 * Retrieve the Status
	 *
	 * The status allows for health checking, showing if the node is in sync with the network.
	 */
	public async status<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/status");
	}

	/**
	 * Retrieve the Syncing Status
	 *
	 * The `syncing` resource is very much alike `node/status`, providing information on the syncing progress.
	 *
	 * If a node is not syncing but significantly behind in blocks, it might be time to perform a check.
	 */
	public async syncing<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/syncing");
	}

	/**
	 * Node debug
	 *
	 * Shows node's debug logs
	 */
	public async debug<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("node/debug");
	}
}
