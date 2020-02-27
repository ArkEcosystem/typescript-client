export interface IResponse<T> {
	body: T;
	headers: Record<string, string>;
	status: number;
}

export type DataResponse<T> = { data: T };
export interface PaginableResponse {
	meta: {
		count: number;
		pageCount: number;
		totalCount: number;
		next?: string;
		previous?: string;
		self: string;
		first: string;
		last: string;
	};
}

/**
 * An API response
 *
 * @template T `body` content, will add `meta` pagination data if is an array
 * @template U Custom `meta` data to add (optional)
 * @template V Should the request be auto-paginated ? (optional)
 */
export type ApiResponse<T, U extends Record<string, any> = {}, V extends boolean = true> = IResponse<
	DataResponse<T> & V extends true ? (T extends any[] ? PaginableResponse : {}) : {} & U
>;

// Export type ApiResponse<T, U extends Record<string, any> = {}> = IResponse<DataResponse<T> & (T extends any[] ? PaginableResponse : {})>;

export interface ApiQuery extends Record<string, any> {
	/** The number of the page that will be returned. */
	page?: number;
	/** The number of resources per page. */
	limit?: number;
}

export interface ApiBody extends Record<string, any> {}
