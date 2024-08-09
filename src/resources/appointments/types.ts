import { z } from "zod";
import { appointment, create, getReview, getScheduled, get, update, remove, accept, decline } from "./schemas";

export type Appointment = z.infer<typeof appointment>

export type GetInReviewedAppointmentsRequestPayload = z.infer<typeof getReview>
export type GetInReviewedAppointmentsResponse = Appointment[]
export type GetScheduledAppointmentsRequestPayload = z.infer<typeof getScheduled>
export type GetScheduledAppointmentsResponse = Appointment[]
export type CreateAppointmentRequestPayload = z.infer<typeof create>
export type CreateAppointmentResponse = Appointment
export type GetAppointmentRequestPayload = z.infer<typeof get>
export type GetAppointmentResponse = Appointment
export type UpdateAppointmentRequestPayload = z.infer<typeof update>
export type UpdateAppointmentResponse = Appointment
export type RemoveAppointmentRequestPayload = z.infer<typeof remove>
export type RemoveAppointmentResponse = Appointment
export type AcceptAppointmentRequestPayload = z.infer<typeof accept>
export type AcceptAppointmentResponse = Appointment
export type DeclineAppointmentRequestPayload = z.infer<typeof decline>
export type DeclineAppointmentResponse = Appointment