const {stagesServiceCreate, stagesServiceList} = require('../stages/stages-service')

module.exports = { 

    async stagesControllerCreate(req, res){
        try{
            const {
                stage_time ,
                stage_status, 
                error_code,
                response_status,
                result_verification ,
                customer_extract_id ,
                journal_extract_log_id 
            } = req.body
    
            const result = await stagesServiceCreate(
                stage_time ,
                stage_status, 
                error_code,
                response_status,
                result_verification ,
                customer_extract_id ,
                journal_extract_log_id 
            )
            res.json(result)
        }catch{error}{
            console.log(error);
        }
    },

    stagesControllerList(req, res){
        try{
            const result = stagesServiceList()
            res.json(result)
        }catch(error){
            console.log(error);
        }
    }
}