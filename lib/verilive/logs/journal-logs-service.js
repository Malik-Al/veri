// const { client } = require('../../db/verilive-db');
const { client } = require('../../db/local-db');




// select * from customers join journal_logs jl on customers.customer_id = jl.customer_extract_id
module.exports = {

    async logsServiceList(){
        try{
            // SELECT * FROM customers WHERE client_id = $1 
            // SELECT client_id from customers
            // const result = await client.query('SELECT * FROM journal_logs ORDER BY journal_log_id ASC')
            let arr = []
            const numId = 1062521
            const logs = await client.query('SELECT * FROM journal_logs ORDER BY journal_log_id ASC')
            const result = await client.query(`
                SELECT * FROM customers join journal_logs jl on customers.customer_id = jl.customer_extract_id WHERE client_id = $1
            `, [numId])

            return result
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
        version_offer,
        confirm_offer
    ){
        try{
            const result = await client.query(
                `INSERT INTO journal_logs 
                (
                    customer_extract_id , 
                    confirm_per_data, photo_coincidence, 
                    doc_coincidence,liveness_coincidence , 
                    result_verification, 
                    version_offer,
                    confirm_offer,
                    created_at
                    ) VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, NOW()) RETURNING *`, 
                [
                    customer_extract_id ,
                    confirm_per_data, 
                    photo_coincidence,
                    doc_coincidence,
                    liveness_coincidence ,
                    result_verification ,
                    version_offer,
                    confirm_offer
                ])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },


    async logsServiceClientList(client_id){
            try{
                const t = 'SELECT * FROM customers ORDER BY customer_id ASC' // id client

                const result = await client.query(`

                SELECT * FROM customers ORDER BY customer_id ASC

                `, [client_id])

                return result.rows
            }catch(error){
                console.log(error);
            }
    }



}





// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

// CREATE TABLE IF NOT EXISTS rpv_service.main.journal_logs (
//     journal_log_id uuid default uuid_generate_v4() unique,
//     customer_extract_id UUID NOT NULL,
//     confirm_per_data varchar(30) not null,
//     photo_coincidence varchar(20) not null,
//     doc_coincidence varchar(20) not null,
//     liveness_coincidence varchar(20) not null,
//     result_verification boolean not null,
//     version_offer varchar(255) not null,
//     confirm_offer boolean default true,
//     created_at timestamp without time zone default (now() at time zone 'utc' at time zone 'Asia/Bishkek') not null,
//     FOREIGN KEY (customer_extract_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
//     PRIMARY KEY (journal_log_id)
// )