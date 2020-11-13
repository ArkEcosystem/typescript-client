import { Entities } from "../../src/resources/entities";
import { configureMocks } from "../mocks";

const resource: Entities = configureMocks<Entities>(Entities);

describe("API - 2.0 - Resources - Entities", () => {
  it("should call \"all\" method", async () => {
    const response = await resource.all();

    expect(response.status).toBe(200);
  });

  it("should call \"get\" method", async () => {
    const response = await resource.get("123");

    expect(response.status).toBe(200);
  });
});
