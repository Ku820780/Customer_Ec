
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const paymentRoutes = require('./Routes/PaymentsRoutes')
app.use(express.json())

const PORT = 5500;


//enveroment variable
dotenv.config()
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET','POST','PUT', 'DELETE'],
    credentials:true
}))
 
//routes
app.use('/api/payment', paymentRoutes)

// app.use(express.static('/Public'))
app.use('/Public', express.static(path.join(__dirname, 'Public')));

const {Subcategory} = require('./Routes/tbl_admin_subcategory')
app.use('/', Subcategory)
 
const Product = require('./Routes/tbl_retailer_product')
app.use('/', Product)

app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
})