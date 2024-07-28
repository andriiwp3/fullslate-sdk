import BaseResource from "../base.js";

export default class AppointmentsResource extends BaseResource {
    async getScheduled(payload) {
        const queryParams = this.schemas.getScheduled.parse(payload)
        return this.apiClient.get(this.endpoints.GET_SCHEDULED, { queryParams });
    }

    async getReview(payload) {
        const body = this.schemas.getReview.parse(payload)
        return this.apiClient.post(this.endpoints.GET_REVIEW, { body });
    }

    async create(payload) {
        const body = this.schemas.create.parse(payload)
        return this.apiClient.post(this.endpoints.CREATE, { body });
    }

    async get(appointmentId, payload) {
        const { id, ...queryParams } = this.schemas.get.parse({ id: appointmentId, ...payload })
        const params = { id };
        return this.apiClient.get(this.endpoints.GET, { params, queryParams });
    }

    async update(appointmentId, payload) {
        console.log('payload', payload)
        const { id, ...body } = this.schemas.update.parse({ id: appointmentId, ...payload })
        const params = { id };
        return this.apiClient.patch(this.endpoints.UPDATE, { params, body });
    }

    async remove(appointmentId, payload) {
        const { id, ...queryParams } = this.schemas.remove.parse({ id: appointmentId, ...payload })
        const params = { id };
        return this.apiClient.delete(this.endpoints.REMOVE, { params, queryParams });
    }

    async accept(appointmentId, payload) {
        const { id, ...body } = this.schemas.accept.parse({ id: appointmentId, ...payload })
        const params = { id };
        return this.apiClient.patch(this.endpoints.ACCEPT, { params, body });
    }

    async decline(appointmentId, payload) {
        const { id, ...body } = this.schemas.decline.parse({ id: appointmentId, ...payload })
        const params = { id };
        return this.apiClient.patch(this.endpoints.DECLINE, { params, body });
    }
}
