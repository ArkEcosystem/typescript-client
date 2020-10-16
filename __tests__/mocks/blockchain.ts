import nock from "nock";

export const mockBlockchain = (host: string) => {
	nock(host)
		.get("/blockchain")
		.reply(200, { data: [] });
};
