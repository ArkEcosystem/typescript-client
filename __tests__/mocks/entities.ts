import nock from "nock";

export const mockEntities = (host: string) => {
    nock(host)
        .get("/entities")
        .reply(200, {
            data: [],
        });

    nock(host)
        .get("/entities/123")
        .reply(200, {
            data: [],
        });
};
