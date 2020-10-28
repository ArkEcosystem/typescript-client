import { Resource } from "./resource";
import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import { AllEntitiesApiQuery, Entity } from "../resourcesTypes";

export class Entities extends Resource {
	public async index(query?: AllEntitiesApiQuery): Promise<ApiResponseWithPagination<Entity>> {
		return this.sendGet("entities", query);
	}

	public async get(id: string): Promise<ApiResponse<Entity>> {
		return this.sendGet(`entities/${id}`);
	}
}
