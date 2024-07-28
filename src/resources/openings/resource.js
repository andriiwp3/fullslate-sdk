import BaseResource from "../base.js";

export default class OpeningsResource extends BaseResource {
    async getAvailable(payload) {
        const body = this.schemas.getAvailable.parse(payload)
        return this.apiClient.post(this.endpoints.GET_AVAILABLE, { body });
    }
}
