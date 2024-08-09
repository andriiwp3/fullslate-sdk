import ApiClient from "../apiClient";

interface BaseResourceOptions<Endpoints, Schemas> {
    apiClient: ApiClient;
    endpoints: Endpoints;
    schemas: Schemas;
}

export default abstract class BaseResource<Endpoints, Schemas> {
    #apiClient;
    #endpoints: Endpoints;
    #schemas: Schemas;

    constructor(deps: BaseResourceOptions<Endpoints, Schemas>) {
        const { apiClient, endpoints, schemas } = deps;

        this.#apiClient = apiClient;
        this.#endpoints = endpoints;
        this.#schemas = schemas;
    }

    get apiClient(): ApiClient {
        return this.#apiClient;
    }

    get endpoints(): Endpoints {
        return this.#endpoints;
    }

    get schemas(): Schemas {
        return this.#schemas;
    }
}
