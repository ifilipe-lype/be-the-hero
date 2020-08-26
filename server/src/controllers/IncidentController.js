const db = require("../database");

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;

        const [count] = await db("incidents").count();

        res.header("X-Total-Count", count["count(*)"]);

        const incidents = await db("incidents")
            .join("ongs", "ongs.id", "=", "incidents.ong_id")
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                "incidents.*",
                "ongs.name",
                "ongs.email",
                "ongs.whatsapp",
                "ongs.city",
                "ongs.uf"
            ]);

        return res.json(incidents);
    },
    async create(req, res){
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await db("incidents").insert({
            title, description, value, ong_id
        });

        return res.json({ id });
    },
    async delete(req, res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await db("incidents")
            .where("id", id)
            .first()
            .select("ong_id");

        await db("incidents").where("id", id).delete();

        if(incident.ong_id !== ong_id){
            // Unauthorized request.
            return res.status(401).json({ error: "Not permitted!" })
        }
        // No Content
        return res.status(204).send();
    }
}
