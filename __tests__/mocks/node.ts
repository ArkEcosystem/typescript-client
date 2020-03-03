import nock from "nock";

export const mockNode = (host: string) => {
	nock(host)
		.get("/node/configuration")
		.reply(200, { data: [] });

	nock(host)
		.get("/node/configuration/crypto")
		.reply(200, { data: [] });

	nock(host)
		.get("/node/fees")
		.query({ days: 30 })
		.reply(200, { data: [] });

	nock(host)
		.get("/node/status")
		.reply(200, { data: [] });

	nock(host)
		.get("/node/syncing")
		.reply(200, { data: [] });
};
