import nock from "nock";

export const mockLocks = (host: string) => {
  nock(host)
    .get("/locks")
    .reply(200, {
      data: [],
    });

  nock(host)
    .get("/locks/123")
    .reply(200, {
      data: [],
    });

  nock(host)
    .post("/locks/unlocked")
    .reply(200, {
      data: [],
    });
};
