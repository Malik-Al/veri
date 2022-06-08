const Router = require('express')
const router = new Router()

const {logsControllerCreate, logsControllerList, logsControllerListClient} = require('../../verilive/logs/journal-logs-controller')

router.get('/list', logsControllerList)
router.get('/list/:id', logsControllerListClient)
router.post('/create', logsControllerCreate)


module.exports = router