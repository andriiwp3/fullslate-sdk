import BaseResource from "../base";
import { GetAvailableOpeningsRequestPayload, GetAvailableOpeningsResponse } from "./types";
import { ENDPOINTS } from "./constants";
import * as schemas from "./schemas";

export default class OpeningsResource extends BaseResource<typeof ENDPOINTS, typeof schemas> {
    getAvailable = async (payload: GetAvailableOpeningsRequestPayload) => {
        const body = this.schemas.getAvailable.parse(payload)
        return this.apiClient.post<GetAvailableOpeningsResponse>(this.endpoints.GET_AVAILABLE, { body });
    }
}
