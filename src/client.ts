import ApiClient from './apiClient';

import * as AuthResource from './resources/auth/index'
import * as AppointmentsResource from './resources/appointments/index'
import * as LocationsResource from './resources/locations/index'
import * as OpeningsResource from './resources/openings/index'

interface FullSlateClientOptions {
    key: string;
    apiKey: string;
  }

export default class FullSlateClient {
    auth: AuthResource.resource;
    appointments: AppointmentsResource.resource;
    locations: LocationsResource.resource;
    openings: OpeningsResource.resource;

    constructor(options: FullSlateClientOptions) {
        const { key, apiKey } = options;

        if (!key) throw new Error('Key is required');
        if (!apiKey) throw new Error('API Key is required');

        const apiClient = new ApiClient({
            baseUrl: `https://${key}.fullslate.com/api/v2`,
            apiKey
        });

        this.auth = new AuthResource.resource({ apiClient, endpoints: AuthResource.endpoints, schemas: AuthResource.schemas });
        this.appointments = new AppointmentsResource.resource({ apiClient, endpoints: AppointmentsResource.endpoints, schemas: AppointmentsResource.schemas });
        this.locations = new LocationsResource.resource({ apiClient, endpoints: LocationsResource.endpoints, schemas: LocationsResource.schemas });
        this.openings = new OpeningsResource.resource({ apiClient, endpoints: OpeningsResource.endpoints, schemas: OpeningsResource.schemas });
    }
}

