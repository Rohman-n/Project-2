import fetch from "node-fetch";
import { expect } from "chai";

describe("API Test Suite", function () {
    const baseUrl = "https://reqres.in";

    it("DELETE - Delete user", async function () {
        const response = await fetch(`${baseUrl}/api/users/2`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres_cbe7d44c15ed412785ef66ebbc199354" 
            },
        });

        expect(response.status, 'error').to.equal(204);
        console.log("User berhasil dihapus");
    });
});