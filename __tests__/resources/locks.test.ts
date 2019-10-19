import { Locks } from "../../src/resources/locks";
import { configureMocks } from "../mocks";

const resource: Locks = configureMocks<Locks>(Locks);

describe("API - 2.0 - Resources - Locks", () => {
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

  it("should call \"unlocked\" method", async () => {
    const response = await resource.unlocked({});

    expect(response.status).toBe(200);
  });
});
