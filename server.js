const express = require('express')
const cors = require('cors')
const connectdb = require('./CONFIG/db')
const { errorhandler } = require('./MIDDLEWARES/errorhandler')
const app = express()
require('dotenv').config()
const port = process.env.PORT
app.use(cors({origin:'*'}))
app.use(express.json())
connectdb()
app.use(errorhandler)

app.use('/api/lesson',require('./ROUTES/LessonRoutes'))
app.use('/api/Squad',require('./ROUTES/SquadRoutes'))


app.listen(port,() => {console.log(`server is running at ${port}`)})