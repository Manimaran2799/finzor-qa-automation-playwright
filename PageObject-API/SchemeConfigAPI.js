import { expect } from "@playwright/test";

export class SchemeConfigAPI {

    constructor(request, token) {
        this.request = request;
        this.token = token;
    }

    async create(payload) {

        const response = await this.request.post(
            "https://stage.finzorcbs.com/api/schema-configuration/create",
            {
                headers: {
                    authorization: `Bearer ${this.token}`,
                    accept: "application/json",
                    "content-type": "application/json"
                },
                data: payload
            }
        );

        return response;
    }

    async createAndValidate(payload, expectedMessage) {

        const response = await this.create(payload);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.status).toBe(true);
        expect(body.message).toBe(expectedMessage);

        return body;
    }

     validateSchemaId(body, schemaId) {
    expect(body.data).toHaveProperty("schema_id");
    expect(Number(body.data.schema_id)).toBe(schemaId);
}
}