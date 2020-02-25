import { Blocks } from "../../src/resources/blocks";
import { configureMocks } from "../mocks";

const resource: Blocks = configureMocks<Blocks>(Blocks);

describe("API - 2.0 - Resources - Blocks", () => {
	it("should call \"all\" method", async () => {
		const response = await resource.all();

		expect(response.status).toBe(200);
	});

	it("should call \"first\" method", async () => {
		const response = await resource.first();

		expect(response.status).toBe(200);
	});

	it("should call \"last\" method", async () => {
		const response = await resource.last();

		expect(response.status).toBe(200);
	});

	it("should call \"get\" method", async () => {
		const response = await resource.get("123");

		expect(response.status).toBe(200);
	});

	it("should call \"transactions\" method", async () => {
		const response = await resource.transactions("123");

		expect(response.status).toBe(200);
	});

	it("should call \"search\" method", async () => {
		const response = await resource.search({});

		expect(response.status).toBe(200);
	});
});
