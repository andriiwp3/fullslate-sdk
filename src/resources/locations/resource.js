import BaseResource from "../base.js";

export default class LocationsResource extends BaseResource {
    async getList() {
        return this.apiClient.get(this.endpoints.GET_MANY);
    }

    async create({ name, street1, street2, city, state, postal_code }) {
        const body = this.schemas.create.parse({ name, street1, street2, city, state, postal_code })
        return this.apiClient.post(this.endpoints.CREATE, { body });
    }

    async get(locationId) {
        const params = this.schemas.get.parse({ id: locationId })
        return this.apiClient.get(this.endpoints.GET, { params });
    }

    async update(locationId, { name, street1, street2, city, state, postal_code }) {
        const { id, ...body } = this.schemas.create.parse({ id: locationId, name, street1, street2, city, state, postal_code })
        const params = { id };
        return this.apiClient.patch(this.endpoints.UPDATE, { params, body });
    }

    async remove(locationId) {
        const params = this.schemas.remove.parse({ id: locationId })
        return this.apiClient.delete(this.endpoints.REMOVE, { params });
    }
}
