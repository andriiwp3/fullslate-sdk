import BaseResource from "../base.js";

export default class AuthResource extends BaseResource {
    async authorize(payload) {
        const body = this.schemas.authorize.parse(payload)
        return this.apiClient.post(this.endpoints.AUTHORIZE, { body });
    }

    async refreshToken(payload) {
        const body = this.schemas.refreshToken.parse(payload)
        return this.apiClient.post(this.endpoints.REFRESH_TOKEN, { body });
    }
}
