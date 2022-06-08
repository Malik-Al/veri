const {customersServiceCreate, customersServiceList} = require('./customers-service')

module.exports = {
    async customersControllerCreate(req, res){
        try{
            const {
                name ,
                surname, 
                second_name ,
                pin ,
                gender ,
                birth_date ,
                passport_series ,
                passport_number ,
                void_status ,
                issued_date ,
                passport_authority ,
                passport_authority_code ,
                expired_date ,
                marital_status ,
                nationality ,
                resident ,
                age ,
                contact_phone,
                address_living ,
                address_fact ,
                department ,
                photo_coincidence ,
                doc_coincidence ,
                video_coincidence ,
                result_verification,
                client_id,
                count_verification,
                version_offer,
                confirm_offer
            } = req.body
            const result = await customersServiceCreate(
                name ,
                surname, 
                second_name ,
                pin ,
                gender ,
                birth_date ,
                passport_series ,
                passport_number ,
                void_status ,
                issued_date ,
                passport_authority ,
                passport_authority_code ,
                expired_date ,
                marital_status ,
                nationality ,
                resident ,
                age ,
                contact_phone,
                address_living ,
                address_fact ,
                department ,
                photo_coincidence ,
                doc_coincidence ,
                video_coincidence ,
                result_verification,
                client_id,
                count_verification,
                version_offer,
                confirm_offer
            )
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },

    async customersControllerList(req, res){
        try{
            const result = await customersServiceList()
            res.json(result)
        }catch(error){
            console.log(error);
        }
    },
}