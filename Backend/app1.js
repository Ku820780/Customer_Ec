const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
const {config} = require('dotenv')
config({ path: "./Config/config.env"})

const paymentRoutes = require('./Routes/PaymentsRoutes.js')
app.use('/api', paymentRoutes)

app.get("/api/getkey", (req, res)=>{
    console.log(req.body)
    res.status(200).json({key:process.env.ROZARPAY_API_KEY})
})
 
module.exports = {app, paymentRoutes}