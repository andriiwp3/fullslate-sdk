const BaseResource = require("../base");
const { AUTH_ENDPOINTS } = require("./constants");

class AuthResource extends BaseResource {
    authorize() {
        return this.apiClient.post(AUTH_ENDPOINTS.AUTHORIZE);
    }

    refreshToken() {
        return this.apiClient.post(AUTH_ENDPOINTS.REFRESH_TOKEN);
    }
}

module.exports = AuthResource;