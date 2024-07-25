class ApiClient {
    #baseUrl;

    async get() {
        const response = await fetch(this.#generateUrl(url), {
            method: 'GET',
        });

        return response.json();
    }
    
    async post(url, { body, headers }) {
        const response = await fetch(this.#generateUrl(url), {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async put(url, { body, headers }) {
        const response = await fetch(this.#generateUrl(url), {
            method: 'PUT',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async patch(url, { body, headers }) {
        const response = await fetch(this.#generateUrl(url), {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async delete(url, { body, headers }) {
        const response = await fetch(this.#generateUrl(url), {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    #generateUrl(path) {
        return this.#baseUrl + path;
    }
}

module.exports = ApiClient;
