import { Votes } from "../../src/resources/votes";
import { configureMocks } from "../mocks";

const resource: Votes = configureMocks<Votes>(Votes);

describe("API - 2.0 - Resources - Voters", () => {
	it("should call \"all\" method", async () => {
		const response = await resource.all();
		expect(response.status).toBe(200);
	});

	it("should call \"get\" method", async () => {
		const response = await resource.get("123");
		expect(response.status).toBe(200);
	});
});
