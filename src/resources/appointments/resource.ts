import BaseResource from "../base";
import { GetScheduledAppointmentsRequestPayload, GetInReviewedAppointmentsRequestPayload, CreateAppointmentRequestPayload, GetAppointmentRequestPayload, UpdateAppointmentRequestPayload, RemoveAppointmentRequestPayload, AcceptAppointmentRequestPayload, DeclineAppointmentRequestPayload, GetScheduledAppointmentsResponse, GetInReviewedAppointmentsResponse, CreateAppointmentResponse, GetAppointmentResponse, UpdateAppointmentResponse, RemoveAppointmentResponse, AcceptAppointmentResponse, DeclineAppointmentResponse } from "./types";
import { ENDPOINTS } from "./constants";
import * as schemas from "./schemas";

export default class AppointmentsResource extends BaseResource<typeof ENDPOINTS, typeof schemas> {
    getScheduled = async(payload: GetScheduledAppointmentsRequestPayload) => {
        const queryParams = this.schemas.getScheduled.parse(payload)
        return this.apiClient.get<GetScheduledAppointmentsResponse>(this.endpoints.GET_SCHEDULED, { queryParams });
    }

    getReview = async (payload: GetInReviewedAppointmentsRequestPayload) =>{
        const body = this.schemas.getReview.parse(payload)
        return this.apiClient.post<GetInReviewedAppointmentsResponse>(this.endpoints.GET_REVIEW, { body });
    }

    create = async (payload: CreateAppointmentRequestPayload) => {
        const body = this.schemas.create.parse(payload)
        return this.apiClient.post<CreateAppointmentResponse>(this.endpoints.CREATE, { body });
    }

    get = async (payload: GetAppointmentRequestPayload) => {
        const { id, ...queryParams } = this.schemas.get.parse(payload)
        const params = { id };
        return this.apiClient.get<GetAppointmentResponse>(this.endpoints.GET, { params, queryParams });
    }

    update = async (payload: UpdateAppointmentRequestPayload) => {
        const { id, ...body } = this.schemas.update.parse(payload)
        const params = { id };
        return this.apiClient.patch<UpdateAppointmentResponse>(this.endpoints.UPDATE, { params, body });
    }

    remove = async (payload: RemoveAppointmentRequestPayload) => {
        const { id, ...queryParams } = this.schemas.remove.parse(payload)
        const params = { id };
        return this.apiClient.delete<RemoveAppointmentResponse>(this.endpoints.REMOVE, { params, queryParams });
    }

     accept = async (payload: AcceptAppointmentRequestPayload) => {
        const { id, ...body } = this.schemas.accept.parse(payload)
        const params = { id };
        return this.apiClient.patch<AcceptAppointmentResponse>(this.endpoints.ACCEPT, { params, body });
    }

    decline = async (payload: DeclineAppointmentRequestPayload) => {
        const { id, ...body } = this.schemas.decline.parse(payload)
        const params = { id };
        return this.apiClient.patch<DeclineAppointmentResponse>(this.endpoints.DECLINE, { params, body });
    }
}
