const request = require("supertest");
const app = require("../../src/app");
const db = require("../../src/database");

describe("ONG", () => {
    // before run each test
    beforeEach(async () => {
        // clear the database.
        await db.migrate.rollback();
        // run the latest migration
        await db.migrate.latest();
    });

    // after running all tests
    afterAll(async () => {
        // close connection from database
        await db.destroy();
    });

    it("should create a new ONG", async () => {
        const res = await request(app)
            // .set("key", "value") for setting headers :-D
            .post("/ongs")
            .send({
                "name": "bom test",
                "email": "contato@bt.com",
                "whatsapp": "1234",
                "city": "Luanda",
                "uf": "LD"
            })
        
        expect(res.body).toHaveProperty("id");
        expect(res.body.id).toHaveLength(8);
    });
});


