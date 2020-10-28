import nock from "nock";

export const mockWallets = (host: string) => {
	nock(host)
		.get("/wallets")
		.reply(200, { data: [] });

	nock(host)
		.get("/wallets/123")
		.reply(200, { data: [] });

	nock(host)
		.get("/wallets/123/transactions")
		.reply(200, { data: [] });

	nock(host)
		.get("/wallets/123/transactions/received")
		.reply(200, { data: [] });

	nock(host)
		.get("/wallets/123/transactions/sent")
		.reply(200, { data: [] });

	nock(host)
		.get("/wallets/123/votes")
		.reply(200, { data: [] });

	nock(host)
		.get("/wallets/top")
		.reply(200, { data: [] });

	nock(host)
		.get("/wallets/123/locks")
		.reply(200, { data: [] });
};
