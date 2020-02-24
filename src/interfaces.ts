export interface IResponse<T> {
	body: T;
	headers: { [key: string]: string };
	status: number;
}

export interface ApiQuery extends Record<string, any> {
	/** The number of the page that will be returned. */
	page?: number;
	/** The number of resources per page. */
	limit?: number;
}

export interface ApiBody extends Record<string, any> {}
