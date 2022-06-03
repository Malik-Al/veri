const { client } = require('../db');



module.exports = {

    async createClientService(code_client, inn){
        try{
            const result = await client.query('INSERT INTO client (code_client, inn, last_update) VALUES ($1, $2, NOW()) RETURNING *', [code_client, inn])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },

    async listAllClientService(){
        try{
            const result = await client.query('SELECT * FROM client ORDER BY id ASC')
            return result.rows
        }catch(error){
            console.log(error);
        }
    },


    async oneClientService(id){
        try{
            const result = await client.query('SELECT * FROM client WHERE id = $1', [id])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },

    async updateClientService(code_client, inn, id){
        try{
            const result = await client.query(
                `UPDATE client SET code_client = $1, inn = $2 WHERE id = $3 RETURNING *`, 
                [code_client, inn, id])
            return result.rows
        }catch(error){
            console.log(error);    
        }

    },

    async deleteClientService(id){
        try{
            const result = await client.query('DELETE FROM client WHERE id = $1 RETURNING *', [id])
            return result.rows
        }catch(error){
            console.log(error);
        }
    }
}
