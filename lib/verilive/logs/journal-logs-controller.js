const {logsServiceCreate, logsServiceList} = require('./journal-logs-service')

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
            } = req.body
            console.log('customer_extract_id=====', customer_extract_id);
            const result = await logsServiceCreate(
                customer_extract_id ,
                confirm_per_data, 
                photo_coincidence,
                doc_coincidence,
                liveness_coincidence ,
                result_verification ,
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
}