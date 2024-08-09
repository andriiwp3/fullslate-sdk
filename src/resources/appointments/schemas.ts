import { z } from "zod";

export const appointment = z.object({
    id: z.number().positive().min(1),
    at: z.string().datetime({ offset: true }),
    to: z.string().datetime({ offset: true }).optional(),
    services: z.array(z.number().positive()),
    employee: z.number().positive().optional(),
    location_id: z.number().positive().optional(),
    custom_fields: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    client_with_creation: z.object({
        first_name: z.string().min(1),
        last_name: z.string().min(1),
        birthday: z.string().date().optional(),
        no_automatic_email: z.boolean().optional(),
        no_sms: z.boolean().optional(),
        mass_email_opt_in: z.boolean().optional(),
        sms_reminder_consent: z.boolean().optional(),
        phone_number: z.object({
            number: z.string().min(1),
            contact_type: z.enum(['HOME', 'MOBILE', 'WORK', 'FAX', 'PAGER', 'OTHER', 'PRIMARY', 'SECONDARY']).optional()
        }),
        address: z.object({
            street1: z.string().min(1),
            street2: z.string().optional(),
            city: z.string().optional(),
            state: z.string().optional(),
            postal_code: z.string().optional(),
        }).optional(),
        email: z.string().optional(),
        time_zone: z.string().optional(),
    }).optional(),
    client: z.number().positive().optional(),
    recurrence_mode: z.string().optional(),
    recurrence_interval: z.number().optional(),
    recur_end_at: z.string().date().optional(),
    notes: z.string().optional(),
    client_notes: z.string().optional(),
    promo_code: z.string().optional(),
    status: z.enum(['STATUS_NO_SHOW', 'STATUS_CHECKED_IN', 'STATUS_COMPLETE', 'STATUS_BOOKED']).optional(),
    api_options: z.any().optional(),
    client_preferred_employee: z.boolean().optional(),
    confirmed: z.boolean().optional(),
    send_client_confirmation_email: z.boolean().optional(),
    send_employee_notification_email: z.boolean().optional(),
    user_type: z.enum(['CLIENT', 'BUSINESS_USER']).optional(),
    passphrase: z.string().optional(),
})

export const create = appointment.omit({ id: true });

export const getReview = z.object({ employees: z.array(z.number().positive()) });

export const getScheduled = appointment.pick({
    status: true,
    confirmed: true
}).extend({
    to: z.string().date().optional(),
    from: z.string().date().optional(),
    employees: z.array(z.number().positive()).optional().transform(v => v?.join(',')),
    service: z.number().positive().optional(),
    include_deleted: z.boolean().optional(),
    changed_since: z.string().datetime({ offset: true }).optional(),
    client_id: z.number().positive().optional(),
});

export const get = appointment.pick({ id: true }).extend({
    state_at: z.string().datetime({ offset: true }).optional(),
});

export const update = appointment.omit({
    location_id: true,
    recurrence_mode: true,
    recur_end_at: true,
    promo_code: true,
    client_preferred_employee: true,
    passphrase: true,
}).partial().extend({
    edit_at: z.string().datetime({ offset: true }).optional(),
    update_recurrence_flag: z.enum(['FUTURE_OCCURRENCE', 'SINGLE_OCCURRENCE']).optional(),
    reassign_employee_if_necessary: z.boolean().optional(),
}).required({ id: true });

export const remove = appointment.pick({
    id: true,
    at: true,
    send_employee_notification_email: true,
    user_type: true,
}).partial().extend({
    delete_future_occurences: z.boolean().optional(),
    send_client_cancel_email: z.boolean().optional(),
    cancellation_message: z.string().optional(),
}).required({ id: true });

export const accept = appointment.pick({ id: true }).extend({
    notify_client: z.boolean().optional(),
    accept_with_conflict: z.boolean().optional(),
});

export const decline = appointment.pick({ id: true }).extend({
    notify_client: z.boolean().optional(),
});
