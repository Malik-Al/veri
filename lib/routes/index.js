const Router = require('express');
const cluentRouter = require('../local-test-db/local-test-db-router/client-router')
const requestRouter = require('../local-test-db/local-test-db-router/request-router')
const customersRouter = require('./verilive-router/customers-router')
const logsRouter = require('./verilive-router/logs-router')
const router = new Router()



router.use('/customers', customersRouter)
router.use('/logs', logsRouter)

//--------------------------------------
router.use('/client', cluentRouter)
router.use('/request', requestRouter)

//------------------------------------------

module.exports = router