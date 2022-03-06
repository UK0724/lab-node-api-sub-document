const router = require('express').Router()
const {postSquad,fetchSquad,fetchByIdSquad,updateSquad,deleteSquad} = require('../CONTROLLERS/SquadControllers')
 
//@POST Squad

router.post('/',postSquad)
router.get('/',fetchSquad)
router.get('/:id',fetchByIdSquad)
router.put('/:id',updateSquad)
router.delete('/:id',deleteSquad)

module.exports = router