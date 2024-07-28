import { ZodError } from 'zod';
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';

import mockApiClient from '../mocks/apiClient.mock'
import { getInvalidTypeError } from '../utils/errors'

import * as Appointments from '../../src/resources/appointments'

describe('Appointments Resource', () => {
    let appointmentsResource;
    const apiClient = mockApiClient;

    beforeAll(() => {
        appointmentsResource = new Appointments.resource({
            apiClient,
            schemas: Appointments.schemas,
            endpoints: Appointments.endpoints,
        });
    })

    beforeEach(() => {
        vi.clearAllMocks(); 
    })

    describe("create", () => {
        test('should throw error if required parameters are not passed', () => {
            expect(appointmentsResource.create({})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "string", path: ["at"] }),
                getInvalidTypeError({ expected: "array", path: ["services"] }),
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const payloadSnakeCase = {
                api_options: {
                    paid: true
                },
                at: "2017-08-15T11:00:00-07:00",
                to: "2017-08-15T12:00:00-07:00",
                services: [
                    2
                ],
                employee: 11,
                location_id: 3,
                custom_fields: [
                    {
                        label: "Vehicle Brand",
                        value: "Toyota"
                    }
                ],
                client_with_creation: {
                    first_name: "Johnny",
                    last_name: "Walker",
                    birthday: "1990-12-31",
                    no_automatic_email: true,
                    no_sms: true,
                    mass_email_opt_in: true,
                    sms_reminder_consent: true,
                    phone_number: {
                        number: "1255464478",
                        contact_type: "WORK"
                    },
                    address: {
                        street1: "SUITE 5A-1204",
                        street2: "Mountain street",
                        city: "Tucson",
                        state: "AZ",
                        postal_code: "85705"
                    },
                    email: "mr.client@example.com",
                    time_zone: "Mountain Time (US & Canada)"
                },
                client: 8,
                recurrence_mode: "RECURS_WEEKLY",
                recurrence_interval: 1,
                recur_end_at: "2017-12-31",
                notes: "Prepare food for the client",
                client_notes: "Hopefully will get the car repaired by tomorrow",
                promo_code: "HAPPYREPAIR",
                status: "STATUS_BOOKED",

                client_preferred_employee: false,
                confirmed: true,
                send_client_confirmation_email: true,
                send_employee_notification_email: true,
                user_type: "BUSINESS_USER",
                passphrase: "PASSCODE11"
            };
            const payloadCamelCase = {
                at: "2017-08-15T11:00:00-07:00",
                to: "2017-08-15T12:00:00-07:00",
                services: [
                    2
                ],
                employee: 11,
                locationId: 3,
                customFields: [
                    {
                        label: "Vehicle Brand",
                        value: "Toyota"
                    }
                ],
                clientWithCreation: {
                    firstName: "Johnny",
                    lastName: "Walker",
                    birthday: "1990-12-31",
                    noAutomaticEmail: true,
                    noSms: true,
                    massEmailOptIn: true,
                    smsReminderConsent: true,
                    phoneNumber: {
                        number: "1255464478",
                        contactType: "WORK"
                    },
                    address: {
                        street1: "SUITE 5A-1204",
                        street2: "Mountain street",
                        city: "Tucson",
                        state: "AZ",
                        postalCode: "85705"
                    },
                    email: "mr.client@example.com",
                    timeZone: "Mountain Time (US & Canada)"
                },
                client: 8,
                recurrenceMode: "RECURS_WEEKLY",
                recurrenceInterval: 1,
                recurEndAt: "2017-12-31",
                notes: "Prepare food for the client",
                clientNotes: "Hopefully will get the car repaired by tomorrow",
                promoCode: "HAPPYREPAIR",
                status: "STATUS_BOOKED",
                apiOptions: {
                    paid: true
                },
                clientPreferredEmployee: false,
                confirmed: true,
                sendClientConfirmationEmail: true,
                sendEmployeeNotificationEmail: true,
                userType: "BUSINESS_USER",
                passphrase: "PASSCODE11"
            };

            await appointmentsResource.create(payloadCamelCase);

            expect(mockApiClient.post).toBeCalledTimes(1);
            expect(mockApiClient.post).toBeCalledWith(Appointments.endpoints.CREATE, { body: payloadSnakeCase });
        })
    })

    describe("update", () => {
        test('should throw error if required parameters are not passed', () => {
            expect(appointmentsResource.update(undefined, {})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "number", path: ["id"] }),
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const id = 3;
            const payloadCamelCase = {
                at: "2017-08-15T11:00:00-07:00",
                to: "2017-08-15T12:00:00-07:00",
                editAt: "2017-12-31T12:00:00-07:00",
                employee: 11,
                services: [
                  2
                ],
                clientWithCreation: {
                  firstName: "Johnny",
                  lastName: "Walker",
                  birthday: "1990-12-31",
                  noAutomaticEmail: true,
                  noSms: true,
                  massEmailOptIn: true,
                  smsReminderConsent: true,
                  phoneNumber: {
                    number: "1255464478",
                    contactType: "WORK"
                  },
                  address: {
                    street1: "SUITE 5A-1204",
                    street2: "Mountain street",
                    city: "Tucson",
                    state: "AZ",
                    postalCode: "85705"
                  },
                  email: "mr.client@example.com",
                  timeZone: "Mountain Time (US & Canada)"
                },
                client: 8,
                recurrenceInterval: 1,
                notes: "Prepare food for the client",
                clientNotes: "Hopefully will get the car repaired by tomorrow",
                confirmed: true,
                status: "STATUS_BOOKED",
                customFields: [
                  {
                    label: "Vehicle Brand",
                    value: "Toyota"
                  }
                ],
                updateRecurrenceFlag: "FUTURE_OCCURRENCE",
                sendClientConfirmationEmail: true,
                sendEmployeeNotificationEmail: true,
                userType: "BUSINESS_USER",
                apiOptions: {
                  paid: true
                },
                reassignEmployeeIfNecessary: false
            }
            const payloadSnakeCase = {
                at: "2017-08-15T11:00:00-07:00",
                to: "2017-08-15T12:00:00-07:00",
                edit_at: "2017-12-31T12:00:00-07:00",
                employee: 11,
                services: [
                  2
                ],
                client_with_creation: {
                  first_name: "Johnny",
                  last_name: "Walker",
                  birthday: "1990-12-31",
                  no_automatic_email: true,
                  no_sms: true,
                  mass_email_opt_in: true,
                  sms_reminder_consent: true,
                  phone_number: {
                    number: "1255464478",
                    contact_type: "WORK"
                  },
                  address: {
                    street1: "SUITE 5A-1204",
                    street2: "Mountain street",
                    city: "Tucson",
                    state: "AZ",
                    postal_code: "85705"
                  },
                  email: "mr.client@example.com",
                  time_zone: "Mountain Time (US & Canada)"
                },
                client: 8,
                recurrence_interval: 1,
                notes: "Prepare food for the client",
                client_notes: "Hopefully will get the car repaired by tomorrow",
                confirmed: true,
                status: "STATUS_BOOKED",
                custom_fields: [
                  {
                    label: "Vehicle Brand",
                    value: "Toyota"
                  }
                ],
                update_recurrence_flag: "FUTURE_OCCURRENCE",
                send_client_confirmation_email: true,
                send_employee_notification_email: true,
                user_type: "BUSINESS_USER",
                api_options: {
                  paid: true
                },
                reassign_employee_if_necessary: false
            }

            await appointmentsResource.update(id, payloadCamelCase);

            expect(mockApiClient.patch).toBeCalledTimes(1);
            expect(mockApiClient.patch).toBeCalledWith(Appointments.endpoints.UPDATE, { params: { id }, body: payloadSnakeCase });
        })
    })

    describe("remove", () => {
        test('should throw error if required parameters are not passed', () => {
            expect(appointmentsResource.remove(undefined, {})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "number", path: ["id"] }),
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const id = 3;
            const payload = {
                at: "2017-07-26T10:00:00-07:00",
                deleteFutureOccurences: true,
                sendClientCancelEmail: true,
                sendEmployeeNotificationEmail: true,
                userType: "BUSINESS_USER",
                cancellationMessage: "Cancellation due to bad weather."
              }
            const apiPayload = {
                at: payload.at,
                delete_future_occurences: payload.deleteFutureOccurences,
                send_client_cancel_email: payload.sendClientCancelEmail,
                send_employee_notification_email: payload.sendEmployeeNotificationEmail,
                user_type: payload.userType,
                cancellation_message: payload.cancellationMessage
              }

            await appointmentsResource.remove(id, payload);

            expect(mockApiClient.delete).toBeCalledTimes(1);
            expect(mockApiClient.delete).toBeCalledWith(Appointments.endpoints.REMOVE, { params: { id }, queryParams: apiPayload });
        })
    })

    describe("accept", () => {
        test('should throw error if required parameters are not passed', () => {
            expect(appointmentsResource.accept(undefined, {})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "number", path: ["id"] }),
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const id = 3;
            const payload = {
                "notifyClient": true,
                "acceptWithConflict": false
              }
            const apiPayload = {
                notify_client: payload.notifyClient,
                accept_with_conflict: payload.acceptWithConflict
              }

            await appointmentsResource.accept(id, payload);

            expect(mockApiClient.patch).toBeCalledTimes(1);
            expect(mockApiClient.patch).toBeCalledWith(Appointments.endpoints.ACCEPT, { params: { id }, body: apiPayload });
        })
    })

    describe("decline", () => {
        test('should throw error if required parameters are not passed', () => {
            expect(appointmentsResource.decline(undefined, {})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "number", path: ["id"] }),
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const id = 3;
            const payload = {
                notifyClient: true,
            }
            const apiPayload = {
                notify_client: payload.notifyClient,
            }

            await appointmentsResource.decline(id, payload);

            expect(mockApiClient.patch).toBeCalledTimes(1);
            expect(mockApiClient.patch).toBeCalledWith(Appointments.endpoints.DECLINE, { params: { id }, body: apiPayload });
        })
    })

    describe("getScheduled", () => {
        test('should call api with passed parameteres', async () => {
            const payload = {
                from: '2016-12-31',
                to: '2016-12-31',
                employees: [1, 2, 3],
                service: 2,
                includeDeleted: true,
                changedSince: '2016-12-31T11:00:00-07:00',
                clientId: 11,
                status: "STATUS_NO_SHOW",
                confirmed: true
            }
            const apiPayload = {
                from: payload.from,
                to: payload.to,
                employees: "1,2,3",
                service: payload.service,
                include_deleted: payload.includeDeleted,
                changed_since: payload.changedSince,
                client_id: payload.clientId,
                status: payload.status,
                confirmed: payload.confirmed,
            }

            await appointmentsResource.getScheduled(payload);

            expect(mockApiClient.get).toBeCalledTimes(1);
            expect(mockApiClient.get).toBeCalledWith(Appointments.endpoints.GET_SCHEDULED, { queryParams: apiPayload });
        })
    })

    describe("getReview", () => {
        test('should call api with passed parameteres', async () => {
            const payload = { employees: [1, 2, 3] }
            await appointmentsResource.getReview(payload);

            expect(mockApiClient.post).toBeCalledTimes(1);
            expect(mockApiClient.post).toBeCalledWith(Appointments.endpoints.GET_REVIEW, { body: payload });
        })
    })
})
