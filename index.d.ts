import { AxiosResponse, AxiosRequestConfig } from "axios";
import { Merge, RequireAtLeastOne } from "type-fest";

declare type Filter<T, K extends keyof T> = T[K];

export declare type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';
export declare type ArkNetwork = 'mainnet' | 'devnet';
export declare type Seed = Pick<Peer, 'ip' | 'port'>;

export declare type ApiResponse<DataType = any> = AxiosResponse<{
    data: DataType;
}>;
export declare type ApiResponseWithMeta<DataType = any, MetaType = MetaResponse> = AxiosResponse<{
    meta: MetaType;
    data: DataType;
}>;

export declare enum TransactionTypes {
    Transfer = 0,
    SecondSignature = 1,
    DelegateRegistration = 2,
    Vote = 3,
    MultiSignature = 4,
    Ipfs = 5,
    TimelockTransfer = 6,
    MultiPayment = 7,
    DelegateResignation = 8
}

declare interface Range {
    from: number;
    to: number;
}

export declare interface ResourceTypes {
    blocks: Blocks;
    delegates: Delegates;
    node: Node;
    peers: Peers;
    transactions: Transactions;
    votes: Votes;
    wallets: Wallets;
    webhooks: Webhooks;
}

export declare interface TransactionFees {
    transfer: number;
    secondSignature: number;
    delegateRegistration: number;
    vote: number;
    multiSignature: number;
    ipfs: number;
    timelockTransfer: number;
    multiPayment: number;
    delegateResignation: number;
}

export declare interface FeeStatistic {
    type: string;
    min: string;
    max: string;
    avg: string;
    sum: string;
    median: string;
}

export declare interface PaginationParams {
    page?: number;
    limit?: number;
}

export declare interface BlocksSearchParams {
    id: string;
    version: number;
    previousBlock: number;
    payloadHash: number;
    generatorPublicKey: string;
    blockSignature: string;
    timestamp: Range;
    height: Range;
    numberOfTransactions: Range;
    totalAmount: Range;
    totalFee: Range;
    reward: Range;
    payloadLength: Range;
}

export declare  interface PeersAllParams {
    port: number;
    status: string;
    os: string;
    version: string;
    orderBy: string;
}

export declare  interface TransactionsAllParams {
    type: TransactionTypes;
    blockId: number;
    id: number;
}

export declare interface TransactionsSearchParams {
    orderBy: string;
    id: string;
    blockId: string;
    type: TransactionTypes;
    version: number;
    senderPublicKey: string;
    senderId: string;
    recipientId: string;
    ownerId: string;
    vendorFieldHex: string;
    timestamp: Range;
    amount: Range;
    fee: Range;
}

export declare interface TransactionsCreateResponse {
    accept: string[];
    broadcast: string[];
    excess: string[];
    invalid: string[];
}

export declare interface WalletsSearchParams {
    address: string;
    publicKey: string;
    secondPublicKey: string;
    vote: string;
    username: string;
    balance: Range;
    votebalance: Range;
}

export interface WebhooksCreateParams {
    event: string;
    target: string;
    enabled: string;
    conditions: [];
}

export declare interface NodeStatusResponse {
    synced: boolean;
    now: number;
    blocksCount: number;
}

export declare interface NodeSyncingResponse {
    syncing: boolean;
    blocks: number;
    height: number;
    id: string;
}

export declare interface NodeConfigurationResponse {
    nethash: string;
    token: string;
    symbol: string;
    explorer: string;
    version: string;
    ports?: {
        [name: string]: number;
    };
    constants: {
        height: number;
        reward: number;
        activeDelegates: number;
        blockTime: number;
        block: {
            version: number;
            maxTransactions: number;
            maxPayload: number;
        };
        epoch: string;
        fees: {
            staticFees: TransactionFees;
        };
        ignoreInvalidSecondSignatureField: boolean;
    };
    transactionPool: {
        maxTransactionAge: number;
        dynamicFees: {
            enabled: boolean;
            minFeePool?: number;
            minFeeBroadcast?: number;
            addonBytes?: TransactionFees;
        };
    };
}

export declare interface Network {
    version: number;
    nethash: string;
    explorer: string;
    token: string;
    name: string;
    symbol: string;
}

export declare interface PeerConfigResponse {
    version: number;
    network: Network;
    plugins: {
        [name: string]: {
            enabled: boolean;
            port: number;
        };
    };
}

export declare interface Peer {
    ip: string;
    port: number;
    latency: number;
    os: string;
    status: number;
    version: number;
}

export declare interface Block {
    id: string;
    version: number;
    previous: string;
    forged: {
        reward: number;
        fee: number;
        total: number;
        amount: 0;
    };
    payload: {
        hash: string;
        length: 0;
    };
    generator: {
        username: string;
        address: string;
        publicKey: string;
    };
    signature: string;
    transactions: number;
    timestamp: {
        epoch: number;
        unix: number;
        human: string;
    };
}

export declare interface Transaction {
    version?: number;
    network?: number;
    type: TransactionTypes;
    timestamp: number;
    senderPublicKey: string;
    fee: string;
    amount: string;
    expiration?: number;
    recipientId?: string;
    asset?: {
        [key: string]: any;
    };
    vendorField?: string;
    vendorFieldHex?: string;
    id?: string;
    signature?: string;
    secondSignature?: string;
    signSignature?: string;
    signatures?: string[];
    blockId?: string;
    sequence?: number;
    timelock?: any;
    timelockType?: number;
    ipfsHash?: string;
    payments?: {
        [key: string]: any;
    };
}

export declare interface Delegate {
    username: string;
    address: string;
    publicKey: string;
    votes: number;
    rank: number;
    blocks: {
        produced: number;
        missed?: number;
        last?: {
            id: string;
            height: number;
            timestamp: {
                epoch: number;
                unix: number;
                human: string;
            };
        };
    };
    production: {
        approval: number;
    };
    forged: {
        fees: number;
        rewards: number;
        total: number;
    };
}

export declare interface Wallet {
    address: string;
    balance: number;
    isDelegate: boolean;
    publicKey: string;
    secondPublicKey: string | null;
    username: string | null;
    vote: string | null;
}

export declare interface Webhook {
    id: number;
    event: string;
    target: string;
    enabled: boolean;
    conditions: {
        key: string;
        condition: string;
        value: string;
    }[];
}

export declare interface MetaResponse {
    count: number;
    pageCount: number;
    totalCount: number;
    next: string | null;
    previous: string | null;
    self: string | null;
    first: string | null;
    last: string | null;
}

export declare class Base {
    http: HttpClient;
    constructor(http: HttpClient);
}

export declare class Blocks extends Base {
    all(query?: Merge<PaginationParams, {
        id: string;
        height: number;
    }>): Promise<ApiResponseWithMeta<Block[]>>;
    get(id: string): Promise<ApiResponse<Block>>;
    transactions(id: string, query?: PaginationParams): Promise<ApiResponseWithMeta<Transaction[]>>;
    search(query: RequireAtLeastOne<BlocksSearchParams>): Promise<ApiResponseWithMeta<Block[]>>;
}

export declare class Delegates extends Base {
    all(query?: PaginationParams): Promise<ApiResponseWithMeta<Delegate[]>>;
    get(id: string): Promise<ApiResponse<Delegate>>;
    blocks(id: string, query?: PaginationParams): Promise<ApiResponseWithMeta<Block[]>>;
    voters(id: string, query?: PaginationParams): Promise<ApiResponseWithMeta<Wallet[]>>;
}

export declare class Node extends Base {
    status(): Promise<ApiResponse<NodeStatusResponse>>;
    syncing(): Promise<ApiResponse<NodeSyncingResponse>>;
    configuration(): Promise<ApiResponse<NodeConfigurationResponse>>;
    fees(days: number): Promise<ApiResponseWithMeta<FeeStatistic[], {
        days: number;
    }>>;
}

export declare class Peers extends Base {
    all(query?: Merge<PaginationParams, PeersAllParams>): Promise<ApiResponseWithMeta<Peer[]>>;
    get(ip: string): Promise<ApiResponse<Peer>>;
}

export declare class Transactions extends Base {
    all(query?: Merge<PaginationParams, TransactionsAllParams>): Promise<ApiResponseWithMeta<Transaction[]>>;
    create(payload: {
        transactions: Transaction[];
    }): Promise<AxiosResponse<{
        data: TransactionsCreateResponse;
        errors?: object;
    }>>;
    get(id: string): Promise<ApiResponse<Transaction>>;
    allUnconfirmed(query?: PaginationParams): Promise<ApiResponseWithMeta<Transaction[]>>;
    getUnconfirmed(id: string): Promise<ApiResponse<Transaction>>;
    search(query: RequireAtLeastOne<TransactionsSearchParams>): Promise<ApiResponseWithMeta<Transaction[]>>;
    types(): Promise<ApiResponse<TransactionTypes>>;
    fees(): Promise<ApiResponse<TransactionFees>>;
}

export declare class Votes extends Base {
    all(query?: PaginationParams): Promise<ApiResponseWithMeta<Transaction[]>>;
    get(id: string): Promise<ApiResponse<Transaction>>;
}

export declare class Wallets extends Base {
    all(query?: PaginationParams): Promise<ApiResponseWithMeta<Wallet[]>>;
    top(query?: PaginationParams): Promise<ApiResponseWithMeta<Wallet[]>>;
    get(id: string): Promise<ApiResponse<Wallet>>;
    transactions(id: string, query?: PaginationParams): Promise<ApiResponseWithMeta<Transaction[]>>;
    transactionsSent(id: string, query?: PaginationParams): Promise<ApiResponseWithMeta<Transaction[]>>;
    transactionsReceived(id: string, query?: PaginationParams): Promise<ApiResponseWithMeta<Transaction[]>>;
    votes(id: string): Promise<ApiResponseWithMeta<Transaction[]>>;
    search(query: RequireAtLeastOne<TransactionsSearchParams>): Promise<ApiResponseWithMeta<Wallet[]>>;
}

export declare class Webhooks extends Base {
    all(query?: PaginationParams): Promise<ApiResponseWithMeta<Webhook[]>>;
    create(payload: WebhooksCreateParams): Promise<ApiResponse<Webhook>>;
    get(id: string): Promise<ApiResponse<Webhook>>;
    update(id: string, payload: WebhooksCreateParams): Promise<object>;
    delete(id: string): Promise<object>;
}

export declare class HttpClient {
    host: string;
    version: number;
    timeout: number;
    headers: object;
    constructor(host: string, apiVersion: number);
    setVersion(version: number): void;
    setHeaders(headers: object): void;
    setTimeout(timeout: number): void;
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = AxiosResponse<T>>(url: string, data?: any): Promise<R>;
    put<T = any, R = AxiosResponse<T>>(url: string, data?: any): Promise<R>;
    patch<T = any, R = AxiosResponse<T>>(url: string, data?: any): Promise<R>;
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    sendApiRequest<T = any, R = AxiosResponse<T>>(method: Method, path: string, payload?: any): Promise<R>;
    sendRequest<T = any, R = AxiosResponse<T>>(method: Method, path: string, payload?: any): Promise<R>;
}

export declare class ApiClient {
    http: HttpClient;
    version: number;
    static findPeers(network: ArkNetwork, version: number, peersOverride?: Seed[]): Promise<Seed>;
    static fetchPeerConfig(host: string): Promise<null | PeerConfigResponse>;
    static selectApiPeer(peers: Seed[]): Promise<null | PeerConfigResponse>;
    static connect(network: ArkNetwork, version: number, peersOverride?: Seed[]): ApiClient;
    constructor(host: string, version?: number);
    setConnection(host: string): void;
    getConnection(): HttpClient;
    setVersion(version: number): ApiClient;
    resource<T extends keyof ResourceTypes>(name: T): Filter<ResourceTypes, T>;
}

export default ApiClient;
