import BaseResource from "../base.js";

export default class LocationsResource extends BaseResource {
    async getList() {
        return this.apiClient.get(this.endpoints.GET_MANY);
    }

    async create({ name, street1, street2, city, state, postalCode }) {
        const body = this.schemas.create.parse({ name, street1, street2, city, state, postal_code: postalCode })
        return this.apiClient.post(this.endpoints.CREATE, { body });
    }

    async get(locationId) {
        const params = this.schemas.get.parse({ id: locationId })
        return this.apiClient.get(this.endpoints.GET, { params });
    }

    async update(locationId, { name, street1, street2, city, state, postalCode }) {
        const { id, ...body } = this.schemas.update.parse({ id: locationId, name, street1, street2, city, state, postal_code: postalCode })
        const params = { id };
        return this.apiClient.patch(this.endpoints.UPDATE, { params, body });
    }

    async remove(locationId) {
        const params = this.schemas.remove.parse({ id: locationId })
        return this.apiClient.delete(this.endpoints.REMOVE, { params });
    }
}
