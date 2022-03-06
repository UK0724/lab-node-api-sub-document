const mongoose = require('mongoose')

const LessonList = new mongoose.Schema({
    name : String,
})

module.exports = mongoose.model("Lesson",LessonList)

