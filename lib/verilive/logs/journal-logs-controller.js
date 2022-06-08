const {logsServiceCreate, logsServiceList, logsServiceClientList} = require('./journal-logs-service')

module.exports = {

    async logsControllerCreate(req, res){
        try{
            const {
                customer_extract_id ,
                confirm_per_data, 
                photo_coincidence,
                doc_coincidence,
                liveness_coincidence ,
                result_verification ,
                version_offer,
                confirm_offer
            } = req.body
            const result = await logsServiceCreate(
                customer_extract_id ,
                confirm_per_data, 
                photo_coincidence,
                doc_coincidence,
                liveness_coincidence ,
                result_verification ,
                version_offer,
                confirm_offer
            )
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async logsControllerList(req, res){
        try{
            const result = await logsServiceList()
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async logsControllerListClient(req, res){
        try{
            const id = parseInt(req.params.id)
            const result = await logsServiceClientList(id)
            res.json(result)
        }catch(error){
            console.log(error);
        }
    }



}