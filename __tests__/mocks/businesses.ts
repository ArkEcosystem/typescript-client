import nock from "nock";

export const mockBusinesses = (host: string) => {
  nock(host)
    .get("/businesses")
    .reply(200, {
      data: [],
    });

  nock(host)
    .get("/businesses/123")
    .reply(200, {
      data: [],
    });

  nock(host)
    .get("/businesses/123/bridgechains")
    .reply(200, {
      data: [],
    });

  nock(host)
    .post("/businesses/search")
    .reply(200, {
      data: [],
    });
};
