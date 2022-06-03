const { Pool } = require('pg');

exports.client = new Pool({
    host: '10.185.233.241',
    user: 'dan',
    database: 'rpv_service',
    password: 'dan',
    port: 5432,
})
