const {createClientService, listAllClientService, updateClientService,  deleteClientService, oneClientService} = require('./client-service')


module.exports = {

    async createClientController(req, res){
        try{
            const {code_client, inn} = req.body
            const result = await createClientService(code_client, inn)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async listAllClientController(req, res){
        try{
            const result = await listAllClientService()
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async oneClientController(req, res){
        try{
            const id =  req.params.id
            const result = await oneClientService(id)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async updateClientController(req, res){
        try{
            const id = req.params.id
            const {code_client, inn} = req.body
            const result = await updateClientService(code_client, inn, id)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async deleteClientController(req, res){
        try{
            const id = req.params.id
            const result = await deleteClientService(id)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    }

}