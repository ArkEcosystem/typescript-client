import { IResponse } from "../interfaces";
import { AllBridgechainsApiQuery, SearchBridgechainsApiBody, SearchBridgechainsApiQuery } from "../resourcesTypes/bridgechains";
import { Resource } from "./resource";

export class Bridgechains extends Resource {
  public async all<T = any>(query?: AllBridgechainsApiQuery): Promise<IResponse<T>> {
    return this.sendGet("bridgechains", query);
  }

  public async get<T = any>(genesisHash: string): Promise<IResponse<T>> {
    return this.sendGet(`bridgechains/${genesisHash}`);
  }

  public async search<T = any>(payload?: SearchBridgechainsApiBody, query?: SearchBridgechainsApiQuery): Promise<IResponse<T>> {
    return this.sendPost("bridgechains/search", payload, query);
  }
}
