import { Bridgechains } from "../../src/resources/bridgechains";
import { configureMocks } from "../mocks";

const resource: Bridgechains = configureMocks<Bridgechains>(Bridgechains);

describe("API - 2.0 - Resources - Bridgechains", () => {
  it("should call \"all\" method", async () => {
    const response = await resource.all();

    expect(response.status).toBe(200);
  });

  it("should call \"get\" method", async () => {
    const response = await resource.get("123");

    expect(response.status).toBe(200);
  });

  it("should call \"search\" method", async () => {
    const response = await resource.search({});

    expect(response.status).toBe(200);
  });
});
