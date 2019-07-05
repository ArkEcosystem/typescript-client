import { Peers } from "../../src/resources/peers";
import { configureMocks } from "../mocks";

const resource: Peers = configureMocks<Peers>(Peers);

describe("API - 2.0 - Resources - Peers", () => {
	it("should call \"all\" method", async () => {
		const response = await resource.all();

		expect(response.status).toBe(200);
	});

	it("should call \"get\" method", async () => {
		const response = await resource.get("123");

		expect(response.status).toBe(200);
	});
});
