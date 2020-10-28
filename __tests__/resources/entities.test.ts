import { configureMocks } from "../mocks";
import { Entities } from "../../src/resources/entities";

const resource: Entities = configureMocks<Entities>(Entities);

describe("API - 3.0 - Resources - Entities", () => {
	it("should call \"index\" method", async () => {
		const response = await resource.index();

		expect(response.status).toBe(200);
	});

	it("should call \"get\" method", async () => {
		const response = await resource.get("123");

		expect(response.status).toBe(200);
	});
});
