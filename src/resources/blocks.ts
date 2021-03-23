import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { Resource } from "./resource";
import {
	AllBlockApiQuery,
	TransactionsInBlockApiQuery,
	Block,
	Transaction,
} from "../resourcesTypes";

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
	public async all(query?: AllBlockApiQuery): Promise<ApiResponseWithPagination<Block[]>> {
		return this.sendGet("blocks", query);
	}

	/**
	 * Retrieve first Block
	 */
	public async first(): Promise<ApiResponse<Block>> {
		return this.sendGet("blocks/first");
	}

	/**
	 * Retrieve last Block
	 */
	public async last(): Promise<ApiResponse<Block>> {
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
	public async get(idOrHeight: string): Promise<ApiResponse<Block>> {
		return this.sendGet(`blocks/${idOrHeight}`);
	}

	/**
	 * List All Transactions in a Block
	 *
	 * Instead of deserializing the block's payload; you can also obtain the transactions of each block as proper transaction objects directly.
	 *
	 * @param idOrHeight The identifier of the block to be retrieved.
	 */
	public async transactions(
		idOrHeight: string,
		query?: TransactionsInBlockApiQuery,
	): Promise<ApiResponseWithPagination<Transaction[]>> {
		return this.sendGet(`blocks/${idOrHeight}/transactions`, query);
	}
}
