import { Node } from "../../src/resources/node";
import { configureMocks } from "../mocks";

const resource: Node = configureMocks<Node>(Node);

describe("API - 2.0 - Resources - Node", () => {
	it("should call \"configuration\" method", async () => {
		const response = await resource.configuration();

		expect(response.status).toBe(200);
	});

	it("should call \"crypto\" method", async () => {
		const response = await resource.crypto();

		expect(response.status).toBe(200);
	});

	it("should call \"fees\" method", async () => {
		const response = await resource.fees(30);

		expect(response.status).toBe(200);
	});

	it("should call \"status\" method", async () => {
		const response = await resource.status();

		expect(response.status).toBe(200);
	});

	it("should call \"syncing\" method", async () => {
		const response = await resource.syncing();

		expect(response.status).toBe(200);
	});
});
