export class RequestError extends Error {
	public constructor(error: any) {
		super(error.message);

		Object.defineProperty(this, "message", {
			enumerable: false,
			value: error.message,
		});

		Object.defineProperty(this, "name", {
			enumerable: false,
			value: this.constructor.name,
		});

		if (error.response) {
			Object.defineProperty(this, "response", {
				enumerable: false,
				value: {
					body: error.response.body,
					headers: error.response.headers,
					status: error.response.status,
				},
			});
		}

		Error.captureStackTrace(this, this.constructor);
	}
}
