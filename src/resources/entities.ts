import { ApiResponse, ApiResponseWithPagination } from "../interfaces";
import {
    AllEntitiesApiQuery,
    Entity,
} from "../resourcesTypes/entities";
import { Resource } from "./resource";

/**
 * This endpoints return Entities.
 */
export class Entities extends Resource {
    /**
     * List all entities
     */
    public async all(query?: AllEntitiesApiQuery): Promise<ApiResponseWithPagination<Entity[]>> {
        return this.sendGet("entities", query);
    }

    /**
     * Return entity by id
     * @param id Entity id
     */
    public async get(id: string): Promise<ApiResponse<Entity>> {
        return this.sendGet(`entities/${id}`);
    }
}
