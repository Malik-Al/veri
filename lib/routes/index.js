const Router = require('express');
const cluentRouter = require('./client-router')
const requestRouter = require('./request-router')
const customersRouter = require('./customers-router')
const logsRouter = require('./logs-router')
const router = new Router()


router.use('/client', cluentRouter)
router.use('/request', requestRouter)
router.use('/customers', customersRouter)
router.use('/logs', logsRouter)

module.exports = router