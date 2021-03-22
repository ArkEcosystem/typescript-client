import { Connection } from "../../src";

import { mockBlocks } from "./blocks";
import { mockDelegates } from "./delegates";
import { mockLocks } from "./locks";
import { mockNode } from "./node";
import { mockPeers } from "./peers";
import { mockRounds } from "./rounds";
import { mockTransactions } from "./transactions";
import { mockVotes } from "./votes";
import { mockWallets } from "./wallets";

// @ts-ignore
export const configureMocks = <T>(resource): T => {
	const host = "https://example.net:4003/api";

	mockBlocks(host);
	mockDelegates(host);
	mockLocks(host);
	mockNode(host);
	mockPeers(host);
	mockRounds(host);
	mockTransactions(host);
	mockVotes(host);
	mockWallets(host);

	return new resource(new Connection(host));
};
