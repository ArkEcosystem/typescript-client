import { IResponse } from "../interfaces";
import { AllLocksApiQuery, SearchLocksApiBody, SearchLocksApiQuery, SearchLocksUnlockedApiBody, SearchLocksUnlockedApiQuery } from "../resourcesTypes/locks";
import { Resource } from "./resource";

/**
 * /!\ This endpoints return HTLC Locks. HTLC Locks are not operational on Mainnet.
 */
export class Locks extends Resource {
  /**
   * List all locks
   */
  public async all<T = any>(query?: AllLocksApiQuery): Promise<IResponse<T>> {
    return this.sendGet("locks", query);
  }

  /**
   * Return lock by id
   * @param id Lock id
   */
  public async get<T = any>(id: string): Promise<IResponse<T>> {
    return this.sendGet(`locks/${id}`);
  }

  /**
   * Search locks
   */
  public async search<T = any>(payload?: SearchLocksApiBody, query?: SearchLocksApiQuery): Promise<IResponse<T>> {
    return this.sendPost("locks/search", payload, query);
  }

  /**
   * Search unlocked
   */
  public async unlocked<T = any>(payload?: SearchLocksUnlockedApiBody, query?: SearchLocksUnlockedApiQuery): Promise<IResponse<T>> {
    return this.sendPost("locks/unlocked", payload, query);
  }
}
