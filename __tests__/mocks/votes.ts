import nock from "nock";

export const mockVotes = (host: string) => {
	nock(host)
		.get("/votes")
		.reply(200, { data: [] });

	nock(host)
		.get("/votes/123")
		.reply(200, { data: [] });
};
