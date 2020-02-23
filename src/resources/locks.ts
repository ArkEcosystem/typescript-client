import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Locks extends Resource {
  public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
    return this.sendGet("locks", query);
  }

  public async get<T = any>(id: string): Promise<IResponse<T>> {
    return this.sendGet(`locks/${id}`);
  }

  public async search<T = any>(payload?: Record<string, any>, query?: Record<string, any>): Promise<IResponse<T>> {
    return this.sendPost("locks/search", payload, query);
  }

  public async unlocked<T = any>(payload?: Record<string, any>, query?: Record<string, any>): Promise<IResponse<T>> {
    return this.sendPost("locks/unlocked", payload, query);
  }
}
