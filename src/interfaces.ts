export interface IResponse<T> {
	body: T;
	headers: { [key: string]: string };
	status: number;
}
