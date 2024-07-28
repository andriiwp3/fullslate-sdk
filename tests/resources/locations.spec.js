import { ZodError } from 'zod';
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';

import mockApiClient from '../mocks/apiClient.mock'
import { getInvalidTypeError } from '../utils/errors'

import * as Locations from '../../src/resources/locations'

describe('Locations Resource', () => {
    let locationsResource;
    const apiClient = mockApiClient;

    beforeAll(() => {
        locationsResource = new Locations.resource({
            apiClient,
            schemas: Locations.schemas,
            endpoints: Locations.endpoints,
        });
    })

    beforeEach(() => {
        vi.clearAllMocks();
    })

    describe("create", () => {
        test('should throw error if required parameters are not passed', () => {
            expect(locationsResource.create({})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "string", path: ["name"] }),
                getInvalidTypeError({ expected: "string", path: ["street1"] }),
                getInvalidTypeError({ expected: "string", path: ["city"] }),
                getInvalidTypeError({ expected: "string", path: ["state"] }),
                getInvalidTypeError({ expected: "string", path: ["postalCode"] })
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const payload = { name: 'Name', street1: "27 st.Git", city: 'London', state: 'England', postalCode: 'E1' };
            const apiPayload = { name: payload.name, street1: payload.street1, city: payload.city, state: payload.state, postal_code: payload.postalCode };

            await locationsResource.create(payload);

            expect(mockApiClient.post).toBeCalledTimes(1);
            expect(mockApiClient.post).toBeCalledWith(Locations.endpoints.CREATE, { body: apiPayload });
        })
    })

    describe("update", () => {
        test('should throw error if required parameters are not passed', () => {
            expect(locationsResource.update(undefined, {})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "number", path: ["id"] }),
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const id = 3;
            const payload = { name: 'Updated Name', postalCode: 'SE1 2UP' };
            const { postalCode, ...apiPayload } = payload;
            apiPayload.postal_code = postalCode;

            await locationsResource.update(id, payload);

            expect(mockApiClient.patch).toBeCalledTimes(1);
            expect(mockApiClient.patch).toBeCalledWith(Locations.endpoints.UPDATE, { params: { id }, body: apiPayload });
        })
    })
})
