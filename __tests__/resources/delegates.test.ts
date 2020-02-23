import { Delegates } from "../../src/resources/delegates";
import { configureMocks } from "../mocks";

const resource: Delegates = configureMocks<Delegates>(Delegates);

describe("API - 2.0 - Resources - Delegates", () => {
	it("should call \"all\" method", async () => {
		const response = await resource.all();

		expect(response.status).toBe(200);
	});

	it("should call \"get\" method", async () => {
		const response = await resource.get("123");

		expect(response.status).toBe(200);
	});

	it("should call \"blocks\" method", async () => {
		const response = await resource.blocks("123");

		expect(response.status).toBe(200);
	});

	it("should call \"search\" method", async () => {
		const response = await resource.search({});

		expect(response.status).toBe(200);
	});
});
