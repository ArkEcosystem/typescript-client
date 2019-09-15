import nock from "nock";

export const mockRounds = (host: string) => {
	nock(host)
		.get("/rounds/12345/delegates")
		.reply(200, {
			data: [],
		});
};
