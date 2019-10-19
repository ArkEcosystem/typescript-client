import { IResponse } from "../interfaces";
import { Resource } from "./resource";

export class Businesses extends Resource {
  public async all<T = any>(query?: Record<string, any>): Promise<IResponse<T>> {
    return this.sendGet("businesses", query);
  }

  public async get<T = any>(id: string): Promise<IResponse<T>> {
    return this.sendGet(`businesses/${id}`);
  }

  public async bridgechains<T = any>(id: string, query?: Record<string, any>): Promise<IResponse<T>> {
    return this.sendGet(`businesses/${id}/bridgechains`, query);
  }

  public async search<T = any>(payload?: Record<string, any>): Promise<IResponse<T>> {
    return this.sendPost("businesses/search", payload);
  }
}
