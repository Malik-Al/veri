const Router = require('express')
const router = new Router()

const {logsControllerCreate, logsControllerList} = require('../verilive/logs/journal-logs-controller')

router.get('/list', logsControllerList)
router.post('/create', logsControllerCreate)


module.exports = router