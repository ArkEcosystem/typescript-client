import nock from "nock";

export const mockBlocks = (host: string) => {
	nock(host)
		.get("/blocks")
		.reply(200, {
			data: [],
		});

	nock(host)
		.get("/blocks/first")
		.reply(200, {
			data: [],
		});

	nock(host)
		.get("/blocks/last")
		.reply(200, {
			data: [],
		});

	nock(host)
		.get("/blocks/123")
		.reply(200, {
			data: [],
		});

	nock(host)
		.get("/blocks/123/transactions")
		.reply(200, {
			data: [],
		});
};
