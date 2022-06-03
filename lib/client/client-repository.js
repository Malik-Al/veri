const { client } = require('../db');


// создание рассширение uuid
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
// проверка SELECT uuid_generate_v4();

const createTableClient = `
    CREATE TABLE IF NOT EXISTS client (
        id uuid DEFAULT uuid_generate_v4(),
	    code_client INTEGER NOT NULL,
        inn VARCHAR(50) NOT NULL,
        last_update timestamp with time zone default NULL,
        PRIMARY KEY (id)
    );`


const createTableRequest = `
    CREATE TABLE IF NOT EXISTS request (
        id uuid DEFAULT uuid_generate_v4(),
        client_id UUID NOT NULL,
        status VARCHAR(50) NOT NULL,
        dt_status VARCHAR(50) NOT NULL,
        verif_fl_fg VARCHAR(50) NOT NULL,
        dt_request timestamp default NULL,
        FOREIGN KEY (client_id) REFERENCES client(id) ON DELETE CASCADE,
        PRIMARY KEY (id)
    );`

    // CONSTRAINT fk_client FOREIGN KEY(client_id) REFERENCES client(id),
    // PRIMARY KEY (id)

const createTableStages = `
    CREATE TABLE IF NOT EXISTS stages (
        id uuid DEFAULT uuid_generate_v4(),
        request_id UUID NOT NULL,
        dt_stage timestamp default NULL,
        service VARCHAR(50) NOT NULL,
        send_param VARCHAR(2000) NOT NULL,
        get_param VARCHAR(20) NOT NULL,
        status VARCHAR(20) NOT NULL,
        error_code VARCHAR(20) NOT NULL,
        FOREIGN KEY(request_id) REFERENCES request(id),
        PRIMARY KEY (id)
      );
    `

//SELECT $1::text AS result







const res = `
CREATE TABLE IF NOT EXISTS customers (
    id uuid default uuid_generate_v4(),
    customer_id uuid not null,
    request_at timestamp with time zone default null,
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
    photo_coincidence varchar(255) not null,
    doc_coincidence varchar(255) not null,
    video_coincidence varchar(255) not null,
    result_verification boolean not null,
    client_id varchar(255) not null,
    count_verification integer not null
)`

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

execute(res)