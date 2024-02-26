const mysql = require('mysql')
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    port:'3306',
    database:'ecommerce'
})

db.connect((err)=>{
    if(err){
        console.log("Data Base Not Connect")
    }else{
        console.log("DataBase Connect SuccessFully....")
    }
})

module.exports = db;