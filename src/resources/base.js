class BaseResource {
    #apiClient;

    constructor(deps) {
        const { apiClient } = deps;
        this.#apiClient = apiClient;
    }

    get apiClient() {
        return this.#apiClient;
    }
}

module.exports = BaseResource;