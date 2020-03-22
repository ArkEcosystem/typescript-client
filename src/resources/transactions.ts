import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces";
import {
	AllTransactionsApiQuery,
	SearchTransactionsApiBody,
	CreateTransactionApiResponse,
	Transaction,
	TransactionTypes,
	TransactionFees,
} from "../resourcesTypes/transactions";
import { Resource } from "./resource";

/**
 * Transactions are signed, serialized payloads; batched together to form a block.
 */
export class Transactions extends Resource {
	/**
	 * List All Transactions
	 *
	 * The paginated API is used to query for multiple transactions. You can apply _filters_ through the query parameter to search for specific transactions.
	 */
	public async all(query?: AllTransactionsApiQuery): Promise<ApiResponseWithPagination<Transaction[]>> {
		return this.sendGet("transactions", query);
	}

	/**
	 * Create a Transaction
	 *
	 * Creating the correct payload for a transaction is non-trivial, as it requires cryptographic functions and a specific serialization protocol.
	 *
	 * Our [crypto SDKs](https://sdk.ark.dev) provide the functionality needed in most major programming languages. You can read more about it in the send transaction section.
	 *
	 * @param payload The list of transactions to create.
	 */
	public async create(
		payload: { transactions: object[] } & Record<string, any>,
	): Promise<ApiResponse<CreateTransactionApiResponse> & { errors?: any }> {
		return this.sendPost("transactions", payload);
	}

	/**
	 * Retrieve a Transaction
	 *
	 * Obtaining a transaction by ID does not require advanced logic; as the API does not return a serialized transaction, but a nicer [DTO](https://en.wikipedia.org/wiki/Data_transfer_object).
	 *
	 * @param id The identifier of the transaction to be retrieved.
	 */
	public async get(id: string): Promise<ApiResponse<Transaction>> {
		return this.sendGet(`transactions/${id}`);
	}

	/**
	 * List All Unconfirmed Transactions
	 *
	 * Unconfirmed transactions have not been incorporated in the blockchain, but reside in the mempool.
	 *
	 * Although usually the mempool is cleared within minutes, during high network load a transaction with a low fee will live here for a considerable time.
	 *
	 * If you have set the transaction with a fee of near zero, it might not be picked up by a Delegate and will time out.
	 */
	public async allUnconfirmed(query?: ApiQuery): Promise<ApiResponseWithPagination<Transaction[]>> {
		return this.sendGet("transactions/unconfirmed", query);
	}

	/**
	 * Get an Unconfirmed Transaction
	 *
	 * As with confirmed transactions, you may query for unconfirmed transactions directly.
	 *
	 * @param id The identifier of the transaction to be retrieved.
	 */
	public async getUnconfirmed(id: string): Promise<ApiResponse<Transaction>> {
		return this.sendGet(`transactions/unconfirmed/${id}`);
	}

	/**
	 * Search for Transactions
	 *
	 * For fine-grained searches, use the `search` endpoint.
	 *
	 * Note that unless you use specific body parameters, the response might contain a large number of transactions (hundreds of thousands).
	 *
	 * It is best to filter as many transactions node side, instead of dissecting the response client side.
	 */
	public async search(
		payload: SearchTransactionsApiBody,
		query?: ApiQuery,
	): Promise<ApiResponseWithPagination<Transaction[]>> {
		return this.sendPost("transactions/search", payload, query);
	}

	/**
	 * Get Transaction Types
	 *
	 * The transaction types are network specific.
	 *
	 * ARK currently supports eight different types, but BridgeChains may define more or less if needed for their business purpose.
	 */
	public async types(): Promise<ApiResponse<TransactionTypes>> {
		return this.sendGet("transactions/types");
	}

	/**
	 * Get Transaction Fees (Non-Dynamic)
	 *
	 * The static transaction fees are significantly higher than the dynamic transaction fees. Use the `node resource` to find dynamic fees, and prefer using these.
	 */
	public async fees(): Promise<ApiResponse<TransactionFees>> {
		return this.sendGet("transactions/fees");
	}

	/**
	 * Get transaction schemas
	 */
	public async schemas(): Promise<ApiResponse<Record<string, object>>> {
		return this.sendGet("transactions/schemas");
	}
}
