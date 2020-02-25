import { ApiQuery, IResponse } from "../interfaces";
import { AllBlockApiQuery, SearchBlockApiBody, TransactionsInBlockApiQuery } from "../resourcesTypes/blocks";
import { Resource } from "./resource";

/**
 * Blocks are added every eight seconds to the blockchain by a Delegate Node. Due to network/technical errors, a Delegate might miss a block. The time between two blocks is then 16 seconds, as the round continues to the next Delegate.
 *
 * All state changes to the blockchain are in the form of blocks; they contain a set of transactions and metadata. A block is rejected if one or more of the transactions is invalid; or if the metadata is invalid. Thus a block returned from the Public API is always valid.
 */
export class Blocks extends Resource {
	/**
	 * List All Blocks
	 *
	 * The Public API may be used to query for blocks.
	 *
	 * This dataset contains millions of blocks; thus for analytical purposes, we recommend you use the Elasticsearch plugin or query the database directly.
	 */
	public async all<T = any>(query?: AllBlockApiQuery): Promise<IResponse<T>> {
		return this.sendGet("blocks", query);
	}

	/**
	 * Retrieve first Block
	 */
	public async first<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("blocks/first");
	}

	/**
	 * Retrieve last Block
	 */
	public async last<T = any>(): Promise<IResponse<T>> {
		return this.sendGet("blocks/last");
	}

	/**
	 * Retrieve a Block
	 *
	 * Blocks may be retrieved by ID or by height. The height is an incremental integer.
	 *
	 * When comparing the order of transactions and blocks, prefer using the block.height over transaction timestamps, as the height is guaranteed to be correctly ordered.
	 * @param idOrHeight The ID or height of the block to be retrieved.
	 */
	public async get<T = any>(idOrHeight: string): Promise<IResponse<T>> {
		return this.sendGet(`blocks/${idOrHeight}`);
	}

	/**
	 * List All Transactions in a Block
	 *
	 * Instead of deserializing the block's payload; you can also obtain the transactions of each block as proper transaction objects directly.
	 *
	 * @param idOrHeight The identifier of the block to be retrieved.
	 */
	public async transactions<T = any>(idOrHeight: string, query?: TransactionsInBlockApiQuery): Promise<IResponse<T>> {
		return this.sendGet(`blocks/${idOrHeight}/transactions`, query);
	}

	/**
	 * Search All Blocks
	 *
	 * It is possible to filter for specifics blocks using the search resource.
	 *
	 * Filtering for blocks at the Node side is a lot more efficient than requesting a large payload and filtering it at the client side.
	 */
	public async search<T = any>(payload?: SearchBlockApiBody, query?: ApiQuery): Promise<IResponse<T>> {
		return this.sendPost("blocks/search", payload, query);
	}
}
