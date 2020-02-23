import { Connection } from "./connection";

export class ConnectionManager {
	private default = "main";
	private readonly connections: Record<string, Connection> = {};

	public connect(host: string, name = "main"): Connection {
		if (this.connections[name]) {
			throw new Error(`Connection [${name}] is already configured.`);
		}

		this.connections[name] = new Connection(host);

		return this.connections[name];
	}

	public disconnect(name?: string): void {
		name = name || this.getDefaultConnection();

		// tslint:disable-next-line: no-dynamic-delete
		delete this.connections[name];
	}

	public connection(name?: string): Connection {
		name = name || this.getDefaultConnection();

		if (!this.connections[name]) {
			throw new Error(`Connection [${name}] not configured.`);
		}

		return this.connections[name];
	}

	public getDefaultConnection(): string {
		return this.default;
	}

	public setDefaultConnection(name: string): void {
		this.default = name;
	}

	public getConnections(): Record<string, Connection> {
		return this.connections;
	}
}
