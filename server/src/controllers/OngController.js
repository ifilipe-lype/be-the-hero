const generateUniqueId = require("../utils/generateUniqueId");
const db = require("../database");

module.exports = {
    async index(req, res){
        // get all ongs from database
        const ongs = await db("ongs").select("*");
        return res.json(ongs);
    }
    ,
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
    
        // generate a random hex string. will it be unique in long-term ?
        const id = generateUniqueId();
    
        // one ong to the database, on table ongs.
        await db("ongs").insert({
            id, name, email, whatsapp, city, uf
        });
    
        return res.json({ id });
    }
}
