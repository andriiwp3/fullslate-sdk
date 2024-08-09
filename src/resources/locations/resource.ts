import BaseResource from "../base";
import { ENDPOINTS } from "./constants";
import * as schemas from "./schemas";
import { CreateLocationRequestPayload, GetLocationRequestPayload, UpdateLocationRequestPayload, RemoveLocationRequestPayload, GetAllLocationsRequestPayload, GetAllLocationsResponse, CreateLocationResponse, GetLocationResponse, UpdateLocationResponse, RemoveLocationResponse } from "./types";

export default class LocationsResource extends BaseResource<typeof ENDPOINTS, typeof schemas> {
    getList = async (payload: GetAllLocationsRequestPayload) => {
        return this.apiClient.get<GetAllLocationsResponse>(this.endpoints.GET_MANY);
    }

    create = async (payload: CreateLocationRequestPayload) => {
        const body = this.schemas.create.parse(payload)
        return this.apiClient.post<CreateLocationResponse>(this.endpoints.CREATE, { body });
    }

    get = async (payload: GetLocationRequestPayload) => {
        const params = this.schemas.get.parse(payload)
        return this.apiClient.get<GetLocationResponse>(this.endpoints.GET, { params });
    }

    update = async (payload: UpdateLocationRequestPayload) => {
        const { id, ...body } = this.schemas.update.parse(payload)
        const params = { id };
        return this.apiClient.patch<UpdateLocationResponse>(this.endpoints.UPDATE, { params, body });
    }

    remove = async (payload: RemoveLocationRequestPayload) => {
        const params = this.schemas.remove.parse(payload)
        return this.apiClient.delete<RemoveLocationResponse>(this.endpoints.REMOVE, { params });
    }
}
