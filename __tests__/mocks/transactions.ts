import nock from "nock";

export const mockTransactions = (host: string) => {
	nock(host)
		.get("/transactions")
		.reply(200, { data: [] });

	nock(host)
		.post("/transactions")
		.reply(200, { data: [] });

	nock(host)
		.get("/transactions/123")
		.reply(200, { data: [] });

	nock(host)
		.get("/transactions/unconfirmed")
		.reply(200, { data: [] });

	nock(host)
		.get("/transactions/unconfirmed/123")
		.reply(200, { data: [] });

	nock(host)
		.get("/transactions/types")
		.reply(200, { data: [] });

	nock(host)
		.get("/transactions/fees")
		.reply(200, { data: [] });

	nock(host)
		.get("/transactions/schemas")
		.reply(200, { data: [] });
};
