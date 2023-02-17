const router = requrie("express").Router()
const bandsCtrl = require("../controllers/bands.js")

router.post('/', bandsCtrl.create)

router.get('/', bandsCtrl.index)

router.put('/:id', bandsCtrl.update)

router.delete('/:id', bandsCtrl.delete)

module.exports = router