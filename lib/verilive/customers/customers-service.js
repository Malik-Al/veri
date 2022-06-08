// const { client } = require('../../db/verilive-db');
const { client } = require('../../db/local-db');


module.exports = {

    async customersServiceList(){
        try{
            const result = await client.query('SELECT * FROM customers ORDER BY customer_id ASC')
            return result.rows
        }catch(error){
            console.log(error);
        }
    },

    async customersServiceCreate(
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
    ){
        try{
            const result = await client.query(
                `INSERT INTO customers 
                (
                    name ,
                    surname, 
                    second_name, 
                    pin,
                    gender, 
                    birth_date, 
                    passport_series, 
                    passport_number, 
                    void_status,
                    issued_date, 
                    passport_authority , 
                    passport_authority_code ,
                    expired_date,
                    marital_status, 
                    nationality,
                    resident,
                    age,
                    contact_phone,
                    address_living,
                    address_fact,
                    department,
                    photo_coincidence,
                    doc_coincidence,
                    video_coincidence,
                    result_verification,
                    client_id, 
                    count_verification,
                    version_offer, 
                    confirm_offer, 
                    request_at
                    ) VALUES 
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, NOW()) RETURNING *`, 
                [
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
                ])
            return result.rows
        }catch(error){
            console.log(error);
        }
    },
}



// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

// CREATE TABLE IF NOT EXISTS rpv_service.main.customers (
//     customer_id uuid default uuid_generate_v4(),
//     name varchar(20) not null,
//     surname varchar(20) not null,
//     second_name varchar(20) default null,
//     pin integer not null,
//     gender varchar(10),
//     birth_date varchar(30) not null,
//     passport_series varchar(20) not null,
//     passport_number varchar(20) not null ,
//     void_status varchar(20) not null,
//     issued_date varchar(20) not null,
//     passport_authority varchar(20) not null,
//     passport_authority_code varchar(20) not null,
//     expired_date varchar(30) not null,
//     marital_status varchar(10) not null,
//     nationality varchar(20) not null,
//     resident boolean not null,
//     age integer not null,
//     contact_phone varchar(20) not null,
//     address_living varchar(255) not null,
//     address_fact varchar(255) not null,
//     department varchar(50) not null,
//     photo_coincidence varchar(20) not null,
//     doc_coincidence varchar(20) not null,
//     video_coincidence varchar(20) not null,
//     result_verification boolean not null,
//     client_id varchar(255) not null,
//     count_verification integer not null,
//     version_offer varchar(255) not null,
//     confirm_offer boolean default true,
//     request_at timestamp without time zone default (now() at time zone 'utc' at time zone 'Asia/Bishkek') not null
// )