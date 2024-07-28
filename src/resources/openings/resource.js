const BaseResource = require("../base");

class OpeningsResource extends BaseResource {
    async getAvailable({ services, from, to, employees, location, user_type }) {
        const body = this.schemas.getAvailable.parse({ services, from, to, employees, location, user_type })
        return this.apiClient.post(this.endpoints.GET_AVAILABLE, { body });
    }
}

module.exports = OpeningsResource;