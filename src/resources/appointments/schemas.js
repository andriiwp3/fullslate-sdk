import { z } from "zod";

const service = z.number().positive();
const employee = z.number().positive();

const appointment = z.object({
    id: z.string().min(1),
    at: z.date(),
    to: z.date(),
    services: z.array(service),
    employee,
    location_id: z.number().positive(),
    custom_fields: z.array(z.object({ label: z.string(), value: z.string() })),
    client_with_creation: z.object({
        first_name: z.string().min(1),
        last_name: z.string().min(1),
        birthday: z.date(),
        no_automatic_email: z.boolean(),
        no_sms: z.boolean(),
        mass_email_opt_in: z.boolean(),
        sms_reminder_consent: z.boolean(),
        phone_number: z.object({
            number: z.string().min(1),
            contact_type: z.enum(['HOME', 'MOBILE', 'WORK', 'FAX', 'PAGER', 'OTHER', 'PRIMARY', 'SECONDARY'])
        }),
        address: z.object({
            street1: z.string().min(1),
            street2: z.string(),
            city: z.string(),
            state: z.string(),
            postal_code: z.string(),
        }),
        email: z.string(),
        time_zone: z.string(),
    }),
    client: z.number().positive(),
    recurrence_mode: z.string(),
    recurrence_interval: z.number(),
    recur_end_at: z.date(),
    notes: z.string(),
    client_notes: z.string(),
    promo_code: z.string(),
    status: z.enum(['STATUS_NO_SHOW', 'STATUS_CHECKED_IN', 'STATUS_COMPLETE', 'STATUS_BOOKED']),
    api_options: z.object(z.any()),
    client_preferred_employee: z.boolean(),
    confirmed: z.boolean(),
    send_client_confirmation_email: z.boolean(),
    send_employee_notification_email: z.boolean(),
    user_type: z.enum(['CLIENT', 'BUSINESS_USER']),
    passphrase: z.string(),
})

export const create = appointment.omit({ id: true });

export const getReview = appointment.pick({ employees: true })

export const getScheduled = appointment.pick({
    to: true,
    status: true,
    confirmed: true
}).extend({
    from: z.date(),
    employees: z.array(employee),
    service,
    include_deleted: z.boolean(),
    changed_since: z.date(),
    client_id: z.number().positive(),
});

export const get = appointment.pick({ id: true }).extend({
    state_at: z.date(),
});

export const update = appointment.omit({
    location_id: true,
    recurrence_mode: true,
    recur_end_at: true,
    promo_code: true,
    client_preferred_employee: true,
    passphrase: true,
}).extend({
    edit_at: z.date(),
    update_recurrence_flag: z.enum(['FUTURE_OCCURRENCE', 'SINGLE_OCCURRENCE']),
    reassign_employee_if_necessary: z.boolean(),
});

export const remove = appointment.pick({
    id: true,
    at: true,
    send_employee_notification_email: true,
    user_type: true,
}).extend({
    delete_future_occurences: z.boolean(),
    send_client_cancel_email: z.boolean(),
    cancellation_message: z.string()
})

export const accept = appointment.pick({ id: true }).extend({
    notify_client: z.boolean(),
    accept_with_conflict: z.boolean(),
})

export const decline = appointment.pick({ id: true }).extend({
    notify_client: z.boolean(),
})
