const {createRequestService, listAllRequestService, updateRequestService, oneRequestService, deleteRequestService} = require('./request-service')





module.exports = {

    async createRequestController(req, res){
        try{
            const id = req.params.id
            const {status, dt_status, verif_fl_fg} = req.body
            const result = await createRequestService(id, status, dt_status, verif_fl_fg)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async listAllRequestController(req, res){
        try{
            const result = await listAllRequestService()
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async oneRequestController(req, res){
        try{
            const id = req.params.id
            const result = await oneRequestService(id)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async updateRequestController(req, res){
        try{
            const id = req.params.id
            const {client_id, status, dt_status, verif_fl_fg} = req.body
            const result = await updateRequestService(client_id, status, dt_status, verif_fl_fg, id)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    deleteRequestController(req, res){
        try{
            const id = parseInt(req.params.id)
            const result = deleteRequestService(id)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    }

}