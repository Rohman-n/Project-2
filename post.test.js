import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import postSchema from "./schema/postSchema.js";

describe("API Test Suite", function () {
    const baseUrl = "https://reqres.in";

    it("CREATE - Login success", async function () {
        const login = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }

        const response = await fetch(`${baseUrl}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres_cbe7d44c15ed412785ef66ebbc199354" 
            },
            body: JSON.stringify(login)
        });

        expect(response.status, 'error').to.equal(200);

        const hasil = await response.json();
        console.log(hasil);
        expect(hasil.token, 'token tidak ditemukan').to.equal("QpwL5tke4Pnpja7X4");

        const ajv = new Ajv();
        const validate = ajv.compile(postSchema);
        const hasilKomparasi = validate(hasil);
        expect(hasilKomparasi, 'schema tidak sesuai').to.be.true;

    });
});