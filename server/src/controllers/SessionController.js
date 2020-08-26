const { create } = require("./OngController");

const db = require("../database");

module.exports = {
    async create(req, res){
        const { id } = req.body;
        const ong = await db("ongs")
            .where("id", id)
            .select("name")
            .first();

        // ong not found, return bad request error
        if(!ong) return res.status(400).json({ error: "No ONG found with this ID!" });
        return res.json(ong)
    }
}