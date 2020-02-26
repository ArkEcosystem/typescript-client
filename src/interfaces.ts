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

export interface ApiQuery extends Record<string, any> {
	/** The number of the page that will be returned. */
	page?: number;
	/** The number of resources per page. */
	limit?: number;
}

export interface ApiBody extends Record<string, any> {}
