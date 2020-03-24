const connection = require('../database/conection')

module.exports = {
    async index(req, res){
        const ong_id = req.headers.authorization

        const response = await connection('incidents')
                .select('*')
                .where('ong_id', ong_id)

        return res.json(response)
    }
}