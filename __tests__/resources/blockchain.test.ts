import { configureMocks } from "../mocks";
import { Blockchain } from "../../src/resources/blockchain";

const resource: Blockchain = configureMocks<Blockchain>(Blockchain);

describe("API - 2.0 - Resources - Blockchain", () => {
	it("should call \"configuration\" method", async () => {
		const response = await resource.index();

		expect(response.status).toBe(200);
	});
});
