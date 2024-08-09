import BaseResource from "../base";
import { AuthorizeRequestPayload, AuthorizeResponse, RefreshTokenRequestPayload, RefreshTokenResponse } from "./types";
import { ENDPOINTS } from "./constants";
import * as schemas from "./schemas";

export default class AuthResource extends BaseResource<typeof ENDPOINTS, typeof schemas> {
    authorize = async (payload: AuthorizeRequestPayload) => {
        const body = this.schemas.authorize.parse(payload)
        return this.apiClient.post<AuthorizeResponse>(this.endpoints.AUTHORIZE, { body });
    }

    refreshToken = async(payload: RefreshTokenRequestPayload) => {
        const body = this.schemas.refreshToken.parse(payload)
        return this.apiClient.post<RefreshTokenResponse>(this.endpoints.REFRESH_TOKEN, { body });
    }
}
