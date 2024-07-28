import { z } from "zod";
import { mapObjectKeysDeep } from "../../utils/object.js";
import { toSnakeCase } from "../../utils/string.js";

const appointment = z.object({
    id: z.number().positive().min(1),
    at: z.string().datetime({ offset: true }),
    to: z.string().datetime({ offset: true }).optional(),
    services: z.array(z.number().positive()),
    employee: z.number().positive().optional(),
    locationId: z.number().positive().optional(),
    customFields: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    clientWithCreation: z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        birthday: z.string().date().optional(),
        noAutomaticEmail: z.boolean().optional(),
        noSms: z.boolean().optional(),
        massEmailOptIn: z.boolean().optional(),
        smsReminderConsent: z.boolean().optional(),
        phoneNumber: z.object({
            number: z.string().min(1),
            contactType: z.enum(['HOME', 'MOBILE', 'WORK', 'FAX', 'PAGER', 'OTHER', 'PRIMARY', 'SECONDARY']).optional()
        }),
        address: z.object({
            street1: z.string().min(1),
            street2: z.string().optional(),
            city: z.string().optional(),
            state: z.string().optional(),
            postalCode: z.string().optional(),
        }),
        email: z.string().optional(),
        timeZone: z.string().optional(),
    }).optional(),
    client: z.number().positive().optional(),
    recurrenceMode: z.string().optional(),
    recurrenceInterval: z.number().optional(),
    recurEndAt: z.string().date().optional(),
    notes: z.string().optional(),
    clientNotes: z.string().optional(),
    promoCode: z.string().optional(),
    status: z.enum(['STATUS_NO_SHOW', 'STATUS_CHECKED_IN', 'STATUS_COMPLETE', 'STATUS_BOOKED']).optional(),
    apiOptions: z.any().optional(),
    clientPreferredEmployee: z.boolean().optional(),
    confirmed: z.boolean().optional(),
    sendClientConfirmationEmail: z.boolean().optional(),
    sendEmployeeNotificationEmail: z.boolean().optional(),
    userType: z.enum(['CLIENT', 'BUSINESS_USER']).optional(),
    passphrase: z.string().optional(),
})

export const create = appointment.omit({ id: true }).transform(x => mapObjectKeysDeep(x, toSnakeCase));

export const getReview = z.object({ employees: z.array(z.number().positive()) });

export const getScheduled = appointment.pick({
    status: true,
    confirmed: true
}).extend({
    to: z.string().date().optional(),
    from: z.string().date().optional(),
    employees: z.array(z.number().positive()).optional().transform(v => v.join(',')),
    service: z.number().positive().optional(),
    includeDeleted: z.boolean().optional(),
    changedSince: z.string().datetime({ offset: true }).optional(),
    clientId: z.number().positive().optional(),
}).transform(x => mapObjectKeysDeep(x, toSnakeCase));

export const get = appointment.pick({ id: true }).extend({
    stateAt: z.string().datetime({ offset: true }).optional(),
}).transform(x => mapObjectKeysDeep(x, toSnakeCase));

export const update = appointment.omit({
    locationId: true,
    recurrenceMode: true,
    recurEndAt: true,
    promoCode: true,
    clientPreferredEmployee: true,
    passphrase: true,
}).partial().extend({
    editAt: z.string().datetime({ offset: true }).optional(),
    updateRecurrenceFlag: z.enum(['FUTURE_OCCURRENCE', 'SINGLE_OCCURRENCE']).optional(),
    reassignEmployeeIfNecessary: z.boolean().optional(),
}).required({ id: true }).transform(x => mapObjectKeysDeep(x, toSnakeCase));

export const remove = appointment.pick({
    id: true,
    at: true,
    sendEmployeeNotificationEmail: true,
    userType: true,
}).partial().extend({
    deleteFutureOccurences: z.boolean().optional(),
    sendClientCancelEmail: z.boolean().optional(),
    cancellationMessage: z.string().optional(),
}).required({ id: true }).transform(x => mapObjectKeysDeep(x, toSnakeCase));

export const accept = appointment.pick({ id: true }).extend({
    notifyClient: z.boolean().optional(),
    acceptWithConflict: z.boolean().optional(),
}).transform(x => mapObjectKeysDeep(x, toSnakeCase));

export const decline = appointment.pick({ id: true }).extend({
    notifyClient: z.boolean().optional(),
}).transform(x => mapObjectKeysDeep(x, toSnakeCase));
