const mongoose = require('mongoose')
const { schema } = require('./Lesson')
const Schema=mongoose.Schema;
const SquadList = new mongoose.Schema({
    name : String,
    lessonId:[{type:Schema.Types.ObjectId,ref:'Lesson'}],
    cohort : String
})

module.exports = mongoose.model("Squad",SquadList)

