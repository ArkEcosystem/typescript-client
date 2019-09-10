import { Rounds } from "../../src/resources/rounds";
import { configureMocks } from "../mocks";

const resource: Rounds = configureMocks<Rounds>(Rounds);

describe("API - 2.0 - Resources - Rounds", () => {
	it("should call \"delegates\" method", async () => {
		const response = await resource.delegates(12345);

		expect(response.status).toBe(200);
	});
});
