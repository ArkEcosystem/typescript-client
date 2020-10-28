import { Connection } from "./connection";

export * from "./connection-manager";
export * from "./connection";
export * from "./errors";
export * from "./interfaces";
export * from "./resources";
export * from "./resourcesTypes";


const main = async () => {
	const connection = new Connection("http://135.181.83.62:4003/api");
	// tslint:disable-next-line:no-console
	console.log((await connection.api("delegates").all({"blocks.produced.from":1, "blocks.produced.to":10000000})).body);
};

main();
