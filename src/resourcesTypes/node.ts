export interface NodeConfiguration {
	core: {
		version: string;
	};
	nethash: string;
	slip44: number;
	wif: number;
	token: string;
	symbol: string;
	explorer: string;
	version: string;
	ports: Record<string, number>;
	constants: {
		height: number;
		reward: number;
		activeDelegates: number;
		blocktime: number;
		block: {
			version: number;
			maxTransactions: number;
			maxPayload: number;
		};
		epoch: string;
		fees: {
			staticFees: {
				transfer: number;
				secondSignature: number;
				delegateRegistration: number;
				vote: number;
				multiSignature: number;
				ipfs: number;
				multiPayment: number;
				delegateResignation: number;
				htlcLock: number;
				htlcClaim: number;
				htlcRefund: number;
			};
		};
		vendorFieldLength: number;
		multiPaymentLimit: number;
		aip11: boolean;
		htlcEnabled: boolean;
		aip36: boolean;
	};

	transactionPool: {
		dynamicFees: {
			enabled: boolean;
			minFeePool: number;
			minFeeBroadcast: number;
			addonBytes: {
				transfer: number;
				secondSignature: number;
				delegateRegistration: number;
				vote: number;
				multiSignature: number;
				ipfs: number;
				multiPayment: number;
				delegateResignation: number;
				htlcLock: number;
				htlcClaim: number;
				htlcRefund: number;
			};
		} | { enabled: boolean };
	};
}

export interface NodeCryptoConfiguration {
	exceptions: Record<string, any>;
	genesisBlock: {
		version: number;
		totalAmount: string;
		totalFee: string;
		reward: string;
		payloadHash: string;
		timestamp: number;
		numberOfTransactions: number;
		payloadLength: number;
		previousBlock?: string;
		generatorPublicKey: string;
		transactions: [
			{
				id: string;
				type: number;
				amount: string;
				fee: string;
				recipientId: string;
				timestamp: number;
				asset?: Record<string, any>;
				senderPublicKey: string;
				signature: string;
			},
		];
		height: number;
		id: string;
		blockSignature: string;
	};
	milestones: [
		{
			height: number;
			reward: number;
			activeDelegates: number;
			blocktime: number;
			block: {
				version: number;
				maxTransactions: number;
				maxPayload: number;
			};
			epoch: string;
			fees: {
				staticFees: {
					transfer: number;
					secondSignature: number;
					delegateRegistration: number;
					vote: number;
					multiSignature: number;
					ipfs: number;
					timelockTransfer: number;
					multiPayment: number;
					delegateResignation: number;
				};
			};
			vendorFieldLength: number;
			aip11: boolean;
		},
	];
	network: {
		name: string;
		messagePrefix: string;
		bip32: {
			public: number;
			private: number;
		};
		pubKeyHash: number;
		nethash: string;
		wif: number;
		slip44: number;
		aip20: number;
		client: {
			token: string;
			symbol: string;
			explorer: string;
		};
	};
}

export interface NodeFeeStatisticsBody {
	min: string;
	max: string;
	avg: string;
	sum: string;
}
export interface NodeFeeStatisticsMeta {
	days: number;
}

export interface NodeStatus {
	synced: boolean;
	now: number;
	blocksCount: number;
	timestamp: number;
}

export interface NodeSyncingStatus {
	syncing: boolean;
	blocks: number;
	height: number;
	id: string;
}
