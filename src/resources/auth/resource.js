import BaseResource from "../base.js";

export default class AuthResource extends BaseResource {
    async authorize({ email, password }) {
        const body = this.schemas.authorize.parse({ email, password })
        return this.apiClient.post(this.endpoints.AUTHORIZE, { body });
    }

    async refreshToken({ refreshToken }) {
        const body = this.schemas.refreshToken.parse({ refreshToken })
        return this.apiClient.post(this.endpoints.REFRESH_TOKEN, { body });
    }
}
