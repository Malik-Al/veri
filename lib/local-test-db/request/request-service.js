const { client } = require('../../db');



module.exports = {

    async createRequestService(client_id, status, dt_status, verif_fl_fg){
        try{
            const result = await client.query('INSERT INTO request (client_id, status, dt_status, verif_fl_fg, dt_request) VALUES ($1, $2, $3, $4, NOW()) RETURNING *', [client_id, status, dt_status, verif_fl_fg])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },

    async listAllRequestService(){
        try{
            const result = await client.query('SELECT * FROM request ORDER BY id ASC')
            return result.rows
        }catch(error){
            console.log(error);
        }
    },


    async oneRequestService(id){
        try{
            const result = await client.query('SELECT * FROM request WHERE id = $1', [id])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },

    async updateRequestService(client_id, status, dt_status, verif_fl_fg, id){
        try{
            const result = await client.query(
                `UPDATE request SET client_id = $1, status = $2, dt_status = $3, verif_fl_fg = $4 , dt_request = NOW() WHERE id = $5 RETURNING *`, 
                [client_id, status, dt_status, verif_fl_fg, id])
            return result.rows
        }catch(error){
            console.log(error);    
        }

    },

    async deleteRequestService(id){
        try{
            const result = await client.query('DELETE FROM request WHERE id = $1 RETURNING *', [id])
            return result.rows
        }catch(error){
            console.log(error);
        }
    }
}
