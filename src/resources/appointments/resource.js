import BaseResource from "../base.js";

export default class AppointmentsResource extends BaseResource {
    async getScheduled({ from, to, employees, service, include_deleted, changed_since, client_id, status, confirmed }) {
        const queryParams = this.schemas.getScheduled.parse({ from, to, employees, service, include_deleted, changed_since, client_id, status, confirmed })
        return this.apiClient.get(this.endpoints.GET_SCHEDULED, { queryParams });
    }

    async getReview({ employees }) {
        const body = this.schemas.getReview.parse({ employees })
        return this.apiClient.post(this.endpoints.GET_REVIEW, { body });
    }

    async create({ at, to, services, employee, location_id, custom_fields, client_with_creation, client, recurrence_mode, recurrence_interval, recur_end_at, notes, client_notes, promo_code, status, api_options, client_preferred_employee, confirmed, send_client_confirmation_email, send_employee_notification_email, user_type, passphrase }) {
        const body = this.schemas.create.parse({ at, to, services, employee, location_id, custom_fields, client_with_creation, client, recurrence_mode, recurrence_interval, recur_end_at, notes, client_notes, promo_code, status, api_options, client_preferred_employee, confirmed, send_client_confirmation_email, send_employee_notification_email, user_type, passphrase })
        return this.apiClient.post(this.endpoints.CREATE, { body });
    }

    async get(appointmentId, { state_at }) {
        const { id, ...queryParams } = this.schemas.get.parse({ id: appointmentId, state_at })
        const params = { id };
        return this.apiClient.get(this.endpoints.GET, { params, queryParams });
    }

    async update(appointmentId, { at, to, edit_at, employee, services, client_with_creation, client, recurrence_interval, notes, client_notes, confirmed, status, custom_fields, update_recurrence_flag, send_client_confirmation_email, send_employee_notification_email, user_type, api_options, reassign_employee_if_necessary }) {
        const { id, ...body } = this.schemas.create.parse({ id: appointmentId, at, to, edit_at, employee, services, client_with_creation, client, recurrence_interval, notes, client_notes, confirmed, status, custom_fields, update_recurrence_flag, send_client_confirmation_email, send_employee_notification_email, user_type, api_options, reassign_employee_if_necessary })
        const params = { id };
        return this.apiClient.patch(this.endpoints.UPDATE, { params, body });
    }

    async remove(appointmentId, { at, delete_future_occurences, send_client_cancel_email, send_employee_notification_email, user_type, cancellation_message }) {
        const { id, ...queryParams } = this.schemas.remove.parse({ id: appointmentId, at, delete_future_occurences, send_client_cancel_email, send_employee_notification_email, user_type, cancellation_message })
        const params = { id };
        return this.apiClient.delete(this.endpoints.REMOVE, { params, queryParams });
    }

    async accept(appointmentId, { notify_client, accept_with_conflict }) {
        const { id, ...body } = this.schemas.accept.parse({ id: appointmentId, notify_client, accept_with_conflict })
        const params = { id };
        return this.apiClient.patch(this.endpoints.ACCEPT, { params, body });
    }

    async decline(appointmentId, { notify_client }) {
        const { id, ...body } = this.schemas.decline.parse({ id: appointmentId, notify_client })
        const params = { id };
        return this.apiClient.patch(this.endpoints.DECLINE, { params, body });
    }
}
