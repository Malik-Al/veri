const { client } = require('../../db/verilive-db');

module.exports = {
    
    async stagesServiceList(){
        try{
            const result = await client.query('SELECT * FROM stages ORDER BY stage_id ASC')
            return result.rows
        }catch(error){
            console.log(error);
        }
    },


    async stagesServiceCreate(
        stage_time ,
        stage_status, 
        error_code,
        response_status,
        result_verification ,
        customer_extract_id ,
        journal_extract_log_id
    ){
        try{
            const result = await client.query(
                `INSERT INTO stages 
                (stage_time , stage_status, error_code, response_status, result_verification , customer_extract_id, journal_extract_log_id) 
                VALUES 
                ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, 
                [
                    stage_time ,
                    stage_status, 
                    error_code,
                    response_status,
                    result_verification ,
                    customer_extract_id ,
                    journal_extract_log_id
                ])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },

}




// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

// CREATE TABLE IF NOT EXISTS stages (
//     stage_id uuid default uuid_generate_v4() unique,
//     stage_time varchar(50) not null,
//     stage_status varchar(50) not null,
//     error_code varchar(255) not null ,
//     response_status varchar(255) not null,
//     result_verification boolean not null,
//     customer_extract_id UUID not null,
//     journal_extract_log_id  UUID not null,
//     FOREIGN KEY (customer_extract_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
//     FOREIGN KEY (journal_extract_log_id) REFERENCES journal_logs(journal_log_id) ON DELETE CASCADE,
//     PRIMARY KEY (stage_id)
// )