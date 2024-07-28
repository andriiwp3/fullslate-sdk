import ApiClient from './apiClient.js';

import * as AuthResource from './resources/auth/index.js'
import * as AppointmentsResource from './resources/appointments/index.js'
import * as LocationsResource from './resources/locations/index.js'
import * as OpeningsResource from './resources/openings/index.js'

export default class FullSlateClient {
    constructor(options = {}) {
        const { key, token, authType } = options;

        if (!key) throw new Error('Key is required');

        const apiClient = new ApiClient({
            path: `https://${key}.fullslate.com/api/v2/`,
            token,
            authType
        });

        this.auth = new AuthResource.resource({ apiClient, endpoints: AuthResource.endpoints, schemas: AuthResource.schemas });
        this.appointments = new AppointmentsResource.resource({ apiClient, endpoints: AppointmentsResource.endpoints, schemas: AppointmentsResource.schemas });
        this.locations = new LocationsResource.resource({ apiClient, endpoints: LocationsResource.endpoints, schemas: LocationsResource.schemas });
        this.openings = new OpeningsResource.resource({ apiClient, endpoints: OpeningsResource.endpoints, schemas: OpeningsResource.schemas });
    }
}

