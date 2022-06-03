const Router = require('express')
const {createClientController, listAllClientController, updateClientController, deleteClientController, oneClientController} = require('../client/client-controller')
const router = new Router()

router.get('/list', listAllClientController)
router.get('/one', oneClientController)
router.post('/create', createClientController)
router.put('/update/:id', updateClientController)
router.delete('/delete/:id', deleteClientController)


module.exports = router