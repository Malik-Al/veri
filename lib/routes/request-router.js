const Router = require('express')
const {listAllRequestController,createRequestController, oneRequestController, updateRequestController, deleteRequestController} = require('../request/request-controller')
const router = new Router()


router.get('/list', listAllRequestController)
router.get('/one/:id', oneRequestController)
router.post('/create/:id', createRequestController)
router.put('/update/:id', updateRequestController)
router.delete('/delete/:id', deleteRequestController)

module.exports = router