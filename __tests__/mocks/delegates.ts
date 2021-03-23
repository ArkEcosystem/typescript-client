import nock from "nock";

export const mockDelegates = (host: string) => {
	nock(host)
		.get("/delegates")
		.reply(200, { data: [] });

	nock(host)
		.get("/delegates/123")
		.reply(200, { data: [] });

	nock(host)
		.get("/delegates/123/blocks")
		.reply(200, { data: [] });

	nock(host)
		.get("/delegates/123/voters")
		.reply(200, { data: [] });
};
