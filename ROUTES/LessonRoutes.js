const router = require('express').Router()
const {postLesson,fetchLesson,fetchByIdLesson,updateLesson,deleteLesson} = require('../CONTROLLERS/LessonControllers')
 
//@POST Lesson

router.post('/',postLesson)
router.get('/',fetchLesson)
router.get('/:id',fetchByIdLesson)
router.put('/:id',updateLesson)
router.delete('/:id',deleteLesson)

module.exports = router