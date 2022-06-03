const { client } = require('../../db/verilive-db');

module.exports = {

    async logsServiceList(){
        try{
            const result = await client.query('SELECT * FROM journal_logs ORDER BY journal_log_id ASC')
            return result.rows
        }catch(error){
            console.log(error);
        }
    },

    async logsServiceCreate(
        customer_extract_id ,
        confirm_per_data, 
        photo_coincidence,
        doc_coincidence,
        liveness_coincidence ,
        result_verification ,
    ){
        try{
            const result = await client.query(
                `INSERT INTO journal_logs 
                (customer_extract_id , confirm_per_data, photo_coincidence, doc_coincidence,liveness_coincidence , result_verification, created_at) 
                VALUES 
                ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`, 
                [
                    customer_extract_id ,
                    confirm_per_data, 
                    photo_coincidence,
                    doc_coincidence,
                    liveness_coincidence ,
                    result_verification ,
                ])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },
}




// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

// CREATE TABLE IF NOT EXISTS journal_logs (
//     journal_log_id uuid default uuid_generate_v4() unique,
//     customer_extract_id UUID NOT NULL,
//     confirm_per_data varchar(30) not null,
//     photo_coincidence varchar(20) not null,
//     doc_coincidence varchar(20) not null,
//     liveness_coincidence varchar(20) not null,
//     result_verification boolean not null,
//     created_at timestamp without time zone default (now() at time zone 'utc' at time zone 'Asia/Bishkek') not null,
//     FOREIGN KEY (customer_extract_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
//     PRIMARY KEY (journal_log_id)
// )