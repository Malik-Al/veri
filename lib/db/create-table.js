const { client } = require('./local-db');



const customer = `

    CREATE TABLE IF NOT EXISTS customers (
        customer_id uuid default uuid_generate_v4() unique,
        name varchar(20) not null,
        surname varchar(20) not null,
        second_name varchar(20) default null,
        pin integer not null,
        gender varchar(10),
        birth_date varchar(30) not null,
        passport_series varchar(20) not null,
        passport_number varchar(20) not null ,
        void_status varchar(20) not null,
        issued_date varchar(20) not null,
        passport_authority varchar(20) not null,
        passport_authority_code varchar(20) not null,
        expired_date varchar(30) not null,
        marital_status varchar(10) not null,
        nationality varchar(20) not null,
        resident boolean not null,
        age integer not null,
        contact_phone varchar(20) not null,
        address_living varchar(255) not null,
        address_fact varchar(255) not null,
        department varchar(50) not null,
        photo_coincidence varchar(20) not null,
        doc_coincidence varchar(20) not null,
        video_coincidence varchar(20) not null,
        result_verification boolean not null,
        client_id varchar(255) not null,
        count_verification integer not null,
        version_offer varchar(255) not null,
        confirm_offer boolean default true,
        request_at timestamp without time zone default (now() at time zone 'utc' at time zone 'Asia/Bishkek') not null
)`


const journal_logs = `
    CREATE TABLE IF NOT EXISTS journal_logs (
        journal_log_id uuid default uuid_generate_v4() unique,
        customer_extract_id UUID NOT NULL,
        confirm_per_data varchar(30) not null,
        photo_coincidence varchar(20) not null,
        doc_coincidence varchar(20) not null,
        liveness_coincidence varchar(20) not null,
        result_verification boolean not null,
        version_offer varchar(255) not null,
        confirm_offer boolean default true,
        created_at timestamp without time zone default (now() at time zone 'utc' at time zone 'Asia/Bishkek') not null,
        FOREIGN KEY (customer_extract_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
        PRIMARY KEY (journal_log_id)
    )
`



const execute = async function(query) {
    try {
        //client.connect()
        const res = await client.query(query)
        console.log('res', res); 
        return res
    } catch (error) {
        console.error(error.stack);
    } finally {
        client.end();         // closes connection
    }
};

execute(journal_logs)