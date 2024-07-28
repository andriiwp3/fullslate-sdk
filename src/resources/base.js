export default class BaseResource {
    #apiClient;
    #endpoints;
    #schemas;

    constructor(deps) {
        const { apiClient, endpoints, schemas } = deps;

        this.#apiClient = apiClient;
        this.#endpoints = endpoints;
        this.#schemas = schemas;
    }

    get apiClient() {
        return this.#apiClient;
    }

    get endpoints() {
        return this.#endpoints;
    }

    get schemas() {
        return this.#schemas;
    }
}
