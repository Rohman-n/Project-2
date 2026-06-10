import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import reqresSchema from "./schema/reqresSchema.js";

describe("API Test Suite", function () {
    const baseUrl = "https://reqres.in";

    it("READ - Get single user", async function () {
        const response = await fetch(`${baseUrl}/api/users/2`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres_cbe7d44c15ed412785ef66ebbc199354" 
            },
        });
        
        expect(response.status, 'error').to.equal(200);

        const hasil = await response.json();
        console.log(hasil);
        expect(hasil.data.id, 'id tidak ditemukan').to.equal(2);

        const ajv = new Ajv();
        const validate = ajv.compile(reqresSchema);
        const hasilKomparasi = validate(hasil);
        expect(hasilKomparasi, 'schema tidak sesuai').to.be.true;

    });
});