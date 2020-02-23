import { Wallets } from "../../src/resources/wallets";
import { configureMocks } from "../mocks";

const resource: Wallets = configureMocks<Wallets>(Wallets);

describe("API - 2.0 - Resources - Wallets", () => {
	it("should call \"all\" method", async () => {
		const response = await resource.all();

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

	it("should call \"transactionsReceived\" method", async () => {
		const response = await resource.transactionsReceived("123");

		expect(response.status).toBe(200);
	});

	it("should call \"transactionsSent\" method", async () => {
		const response = await resource.transactionsSent("123");

		expect(response.status).toBe(200);
	});

	it("should call \"votes\" method", async () => {
		const response = await resource.votes("123");

		expect(response.status).toBe(200);
	});

	it("should call \"top\" method", async () => {
		const response = await resource.top();

		expect(response.status).toBe(200);
	});

	it("should call \"search\" method", async () => {
		const response = await resource.search({});

		expect(response.status).toBe(200);
	});

	it("should call \"locks\" method", async () => {
		const response = await resource.locks("123");

		expect(response.status).toBe(200);
	});
});
