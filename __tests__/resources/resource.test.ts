import { Connection } from "../../src/connection";
import { Resource } from "../../src/resources/resource";

const host = 'http://1.1.1.1:1234'
let resource: Resource

beforeEach(() => {
	resource = new Resource(new Connection(host));
});

describe("API - 2.0 - Resources", () => {
	it("should set options", async () => {
		const options = {
			"timeout": 10000,
		};

		resource.withOptions(options);
		expect(resource.getOptions()).toBe(options);
	});
});
