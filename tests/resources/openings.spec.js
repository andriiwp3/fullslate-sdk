import { ZodError } from 'zod';
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';

import mockApiClient from '../mocks/apiClient.mock'
import { getInvalidTypeError } from '../utils/errors'

import * as Openings from '../../src/resources/openings'

describe('Openings Resource', () => {
    let openingsResource;
    const apiClient = mockApiClient;

    beforeAll(() => {
        openingsResource = new Openings.resource({
            apiClient,
            schemas: Openings.schemas,
            endpoints: Openings.endpoints,
        });
    })

    beforeEach(() => {
        vi.clearAllMocks();
    })

    describe("getAvailable", () => {
        test('should throw error if services is not passed', () => {
            expect(openingsResource.getAvailable({})).rejects.toThrowError(new ZodError([
                getInvalidTypeError({ expected: "array", path: ["services"] })
            ]));
        })

        test('should call api with passed parameteres', async () => {
            const payload = { services: [1, 2, 3], from: '2024-02-15', to: '2024-03-15' };
            await openingsResource.getAvailable(payload);

            expect(mockApiClient.post).toBeCalledTimes(1);
            expect(mockApiClient.post).toBeCalledWith(Openings.endpoints.GET_AVAILABLE, { body: payload });
        })
    })
})
