import nock from "nock";

export const mockPeers = (host: string) => {
	nock(host)
		.get("/peers")
		.reply(200, { data: [] });

	nock(host)
		.get("/peers/123")
		.reply(200, { data: [] });
};
