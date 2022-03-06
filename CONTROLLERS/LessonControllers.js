const asynchandler = require('express-async-handler')
const Lesson  = require('../MODELS/Lesson')


const postLesson = asynchandler(async(req,res) =>{
    const data = await Lesson.create(req.body)
    if(data){
        res.status(201).json(data)
    }
    else{
        res.status(400)
        throw new Error('Invalid Lesson')
    }
}) 
const fetchLesson = asynchandler(async(req,res) =>{
    const getdata = await Lesson.find()
    if(getdata){
        res.status(201).json(getdata)
    }
    else{
        res.status(400)
        throw new Error('Invalid Lesson')
    }
}) 

const fetchByIdLesson =asynchandler(async(req,res) =>{
    const getdatabyid = await Lesson.find(req.params.id)
    if(getdatabyid){
        res.status(201).json(getdatabyid)
    }
    else{
        res.status(400)
        throw new Error('Invalid Lesson')
    }
})
const updateLesson =asynchandler(async(req,res) =>{
    const updatedatabyid = await Lesson.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    if(updatedatabyid){
        res.status(201).json(updatedatabyid)
    }
    else{
        res.status(400)
        throw new Error('Invalid Lesson')
    }
})
const deleteLesson =asynchandler(async(req,res) =>{
    const deletedatabyid = await Lesson.findByIdAndDelete(req.params.id)
    if(deletedatabyid){
        res.status(201).json(
            {
                message : 'deleted succesfully'
            }
        )
    }
    else{
        res.status(400)
        throw new Error('Invalid Lesson')
    }
})

module.exports = {postLesson,fetchLesson,fetchByIdLesson,updateLesson,deleteLesson}