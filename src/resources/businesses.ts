import { IResponse } from "../interfaces";
import { AllBusinessesApiQuery, BusinessBridgechainsApiQuery, SearchBusinesssApiBody, SearchBusinesssApiQuery } from "../resourcesTypes/businesses";
import { Resource } from "./resource";

export class Businesses extends Resource {
  /**
   * List all businesses
   */
  public async all<T = any>(query?: AllBusinessesApiQuery): Promise<IResponse<T>> {
    return this.sendGet("businesses", query);
  }

  /**
   * Return business by wallet address
   * 
   * @param walletAddress The identifier of the wallet to be retrieved.
   */
  public async get<T = any>(walletAddress: string): Promise<IResponse<T>> {
    return this.sendGet(`businesses/${walletAddress}`);
  }

  /**
   * Return bridgechains of a business
   * 
   * @param walletAddress The identifier of the wallet to be retrieved.
   */
  public async bridgechains<T = any>(walletAddress: string, query?: BusinessBridgechainsApiQuery): Promise<IResponse<T>> {
    return this.sendGet(`businesses/${walletAddress}/bridgechains`, query);
  }

  /**
   * Search business
   */
  public async search<T = any>(payload?: SearchBusinesssApiBody, query?: SearchBusinesssApiQuery): Promise<IResponse<T>> {
    return this.sendPost("businesses/search", payload, query);
  }
}
