import { Transactions } from "../../src/resources/transactions";
import { configureMocks } from "../mocks";

const resource: Transactions = configureMocks<Transactions>(Transactions);

describe("API - 2.0 - Resources - Transactions", () => {
	it("should call \"all\" method", async () => {
		const response = await resource.all();

		expect(response.status).toBe(200);
	});

	it("should call \"create\" method", async () => {
		const response = await resource.create({ transactions: [] });

		expect(response.status).toBe(200);
	});

	it("should call \"get\" method", async () => {
		const response = await resource.get("123");

		expect(response.status).toBe(200);
	});

	it("should call \"allUnconfirmed\" method", async () => {
		const response = await resource.allUnconfirmed();

		expect(response.status).toBe(200);
	});

	it("should call \"getUnconfirmed\" method", async () => {
		const response = await resource.getUnconfirmed("123");

		expect(response.status).toBe(200);
	});

	it("should call \"search\" method", async () => {
		const response = await resource.search({});

		expect(response.status).toBe(200);
	});

	it("should call \"types\" method", async () => {
		const response = await resource.types();

		expect(response.status).toBe(200);
	});

	it("should call \"fees\" method", async () => {
		const response = await resource.fees();

		expect(response.status).toBe(200);
	});

	it("should call \"schemas\" method", async () => {
		const response = await resource.schemas();

		expect(response.status).toBe(200);
	});
});
