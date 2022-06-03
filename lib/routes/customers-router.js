const Router = require('express')
const router = new Router()
const {customersControllerCreate, customersControllerList} = require('../verilive/customers/customers-controller')



router.get('/list', customersControllerList)
router.post('/create', customersControllerCreate)


module.exports = router