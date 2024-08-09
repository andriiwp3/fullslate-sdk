import { Response } from './types';

interface ApiClientOptions {
    baseUrl: string;
    apiKey: string;
}

interface RequestOptions {
    params?: Record<string, string | number | boolean>;
    queryParams?: Record<string, string | number | boolean>;
    headers?: Record<string, string>;
    body?: unknown
}

export default class ApiClient {
    #baseUrl: string;
    #apiKey: string;

    constructor({ baseUrl, apiKey }: ApiClientOptions) {
        this.#baseUrl = baseUrl;
        this.#apiKey = apiKey;
    }

    async get<Data>(url: string, { params, queryParams, headers }: Omit<RequestOptions, 'body'> = {}): Promise<Response<Data>> {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'GET',
            headers: this.#getHeaders(headers)
        });

        return {
            ...response,
            data: response.json() as Data,
        }
    }
    
    async post<Data>(url: string, { params, queryParams, body, headers }: RequestOptions): Promise<Response<Data>> {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: this.#getHeaders(headers)
        });

        return {
            ...response,
            data: response.json() as Data,
        }
    }

    async put<Data>(url: string, { params, queryParams, body, headers }: RequestOptions): Promise<Response<Data>> {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: this.#getHeaders(headers)
        });

        return {
            ...response,
            data: response.json() as Data,
        }
    }

    async patch<Data>(url: string, { params, queryParams, body, headers }: RequestOptions): Promise<Response<Data>> {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: this.#getHeaders(headers)
        });

        return {
            ...response,
            data: response.json() as Data,
        }
    }

    async delete<Data>(url: string, { params, queryParams, body, headers }: RequestOptions): Promise<Response<Data>> {
        const generatedUrl = this.#generateUrl(url, { params, queryParams });
        const response = await fetch(generatedUrl, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: this.#getHeaders(headers)
        });

        return {
            ...response,
            data: response.json() as Data,
        }
    }

    #generateUrl(path: string, { params, queryParams }: Pick<RequestOptions, 'params' | 'queryParams'>) {
        let url = 'http://localhost:8080/' + this.#baseUrl + path;

        if (queryParams) {
            const transformedQueryParams = Object.keys(queryParams).reduce((acc, key) => ({ ...acc, [key]: String(queryParams[key]) }), {})
            return`${url}?${new URLSearchParams(transformedQueryParams)}`;
        }

        if (params) {
            for (const key of Object.keys(params)) {
                url.replace(`{${key}}`, String(params[key]));
            }
        }

        return url;
    }

    #getHeaders(headers = {}) {
        return {
            "Authorization": `Bearer ${this.#apiKey}`,
            "Content-Type": "application/json",
            ...headers,
        }
    }
}
