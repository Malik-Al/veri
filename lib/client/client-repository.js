const { client } = require('../db');


// создание рассширение uuid
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
// проверка SELECT uuid_generate_v4();

const createTableClient = `
    CREATE TABLE IF NOT EXISTS client (
        id uuid DEFAULT uuid_generate_v4(),
	    code_client INTEGER NOT NULL,
        inn VARCHAR(50) NOT NULL,
        last_update timestamp default NULL,
        PRIMARY KEY (id)
    );`


const createTableRequest = `
    CREATE TABLE IF NOT EXISTS request (
        id uuid DEFAULT uuid_generate_v4(),
        client_id VARCHAR(100) NOT NULL,
        dt_request timestamp default NULL,
        status VARCHAR(50) NOT NULL,
        dt_status VARCHAR(50) NOT NULL,
        verif_fl_fg VARCHAR(50) NOT NULL,
        CONSTRAINT fk_client FOREIGN KEY(client_id) REFERENCES client(id),
        PRIMARY KEY (id)
    );`


const createTableStages = `
    CREATE TABLE IF NOT EXISTS stages (
        id uuid DEFAULT uuid_generate_v4(),
        request_id TEXT NOT NULL,
        dt_stage timestamp default NULL,
        service VARCHAR(50) NOT NULL,
        send_param VARCHAR(2000) NOT NULL,
        get_param VARCHAR(20) NOT NULL,
        status VARCHAR(20) NOT NULL,
        error_code VARCHAR(20) NOT NULL,
        CONSTRAINT fk_request FOREIGN KEY(request_id) REFERENCES request(id),
        PRIMARY KEY (id)
      );
    `

//SELECT $1::text AS result








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

execute(createTableRequest)