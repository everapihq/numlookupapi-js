'use strict';

class Numlookupapi {
    baseUrl = 'https://api.numlookupapi.com/v1/';

    constructor(apiKey = '') {
        this.headers = {
            apikey: apiKey
        };
    }

    call(endpoint, params = {}) {
        const paramString = new URLSearchParams({
            ...params
        }).toString();

        return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }
    status() {
        return this.call('status');
    }

    validate(phoneNumber, params) {
        return this.call(`validate/${phoneNumber}`, params);
    }
}

export default Numlookupapi;
