const Router = require('express');
const cluentRouter = require('./client.router')
const router = new Router()


router.use('/client', cluentRouter)


module.exports = router