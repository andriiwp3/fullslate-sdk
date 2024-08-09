import BaseResource from "../base";
import { GetServicesRequestPayload, GetServicesResponse } from "./types";
import { ENDPOINTS } from "./constants";
import * as schemas from "./schemas";

export default class ServicesResource extends BaseResource<typeof ENDPOINTS, typeof schemas> {
    getAvailable = async (payload: GetServicesRequestPayload) => {
        const body = this.schemas.getList.parse(payload)
        return this.apiClient.post<GetServicesResponse>(this.endpoints.GET_LIST, { body });
    }
}
