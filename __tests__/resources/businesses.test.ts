import { Businesses } from "../../src/resources/businesses";
import { configureMocks } from "../mocks";

const resource: Businesses = configureMocks<Businesses>(Businesses);

describe("API - 2.0 - Resources - Businesses", () => {
  it("should call \"all\" method", async () => {
    const response = await resource.all();

    expect(response.status).toBe(200);
  });

  it("should call \"get\" method", async () => {
    const response = await resource.get("123");

    expect(response.status).toBe(200);
  });

  it("should call \"bridgechains\" method", async () => {
    const response = await resource.bridgechains("123");

    expect(response.status).toBe(200);
  });

  it("should call \"bridgechain\" method", async () => {
    const response = await resource.bridgechain("123", "123");

    expect(response.status).toBe(200);
  });

  it("should call \"search\" method", async () => {
    const response = await resource.search({});

    expect(response.status).toBe(200);
  });
});
