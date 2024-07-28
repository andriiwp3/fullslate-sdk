const BaseResource = require("../base");

class LocationsResource extends BaseResource {
    async getList() {
        return this.apiClient.get(this.endpoints.GET_MANY);
    }

    async create({ name, street1, street2, city, state, postal_code }) {
        const body = this.schemas.create.parse({ name, street1, street2, city, state, postal_code })
        return this.apiClient.post(this.endpoints.CREATE, { body });
    }

    async get(id) {
        const params = this.schemas.get.parse({ id })
        return this.apiClient.get(this.endpoints.GET, { params });
    }

    async update(id, { name, street1, street2, city, state, postal_code, postal_code }) {
        const { id, ...body } = this.schemas.create.parse({ id, name, street1, street2, city, state, postal_code, postal_code })
        const params = { id };
        return this.apiClient.patch(this.endpoints.UPDATE, { params, body });
    }

    async remove(id) {
        const params = this.schemas.remove.parse({ id })
        return this.apiClient.delete(this.endpoints.REMOVE, { params });
    }
}

module.exports = LocationsResource;