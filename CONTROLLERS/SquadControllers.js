const asynchandler = require('express-async-handler')
const Sqauad = require('../MODELS/Sqauad')


const postSquad = asynchandler(async(req,res) =>{
    const data = await Sqauad.create(req.body)
    if(data){
        res.status(201).json(data)
    }
    else{
        res.status(400)
        throw new Error('Invalid Sqauad')
    }
}) 
const fetchSquad = asynchandler(async(req,res) =>{
    const getdata = await Sqauad.find()
    if(getdata){
        res.status(201).json(getdata)
    }
    else{
        res.status(400)
        throw new Error('Invalid Sqauad')
    }
}) 

const fetchByIdSquad =asynchandler(async(req,res) =>{
    const getdatabyid = await Sqauad.find(req.params.id)
    if(getdatabyid){
        res.status(201).json(getdatabyid)
    }
    else{
        res.status(400)
        throw new Error('Invalid Sqauad')
    }
})
const updateSquad =asynchandler(async(req,res) =>{
    const updatedatabyid = await Sqauad.findByIdAndUpdate(req.params.id,req.body,{
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
const deleteSquad =asynchandler(async(req,res) =>{
    const deletedatabyid = await Sqauad.findByIdAndDelete(req.params.id)
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


module.exports = {postSquad,fetchSquad,fetchByIdSquad,updateSquad,deleteSquad}