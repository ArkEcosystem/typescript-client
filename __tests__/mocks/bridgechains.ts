import nock from "nock";

export const mockBridgechains = (host: string) => {
  nock(host)
    .get("/bridgechains")
    .reply(200, {
      data: [],
    });

  nock(host)
    .get("/bridgechains/123")
    .reply(200, {
      data: [],
    });

  nock(host)
    .post("/bridgechains/search")
    .reply(200, {
      data: [],
    });
};
