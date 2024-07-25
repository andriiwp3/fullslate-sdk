class ApiClient {
    #baseUrl;

    async get(url, { params, queryParams }) {
        const url = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(url, {
            method: 'GET',
        });

        return response.json();
    }
    
    async post(url, { params, queryParams, body, headers }) {
        const url = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async put(url, { params, queryParams, body, headers }) {
        const url = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async patch(url, { params, queryParams, body, headers }) {
        const url = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async delete(url, { params, queryParams, body, headers }) {
        const url = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    #generateUrl(path, { params, queryParams }) {
        let url = this.#baseUrl + path;

        if (params) {
            return`${url}?${new URLSearchParams(queryParams)}`;
        }

        return url;
    }
}

module.exports = ApiClient;
