

const errorhandler = (err,res,req,next) =>{
    const statuscode = res.statuscode ? res.statuscode : 500
    res.status(statuscode)
    res.json({
        message : err.message,
        stack : err.stack
    })
    next()
}

module.exports = {
    errorhandler
}