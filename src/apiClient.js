export default class ApiClient {
    #baseUrl;

    async get(url, { params, queryParams }) {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'GET',
        });

        return response.json();
    }
    
    async post(url, { params, queryParams, body, headers }) {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async put(url, { params, queryParams, body, headers }) {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async patch(url, { params, queryParams, body, headers }) {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers
        });

        return response.json();
    }

    async delete(url, { params, queryParams, body, headers }) {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
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
