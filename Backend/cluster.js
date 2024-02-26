const cluster = require("node:cluster")
const express = require('express')
const os = require('os')
const totalCPUs = os.cpus().length;
// console.log(totalCPUs)


if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
      cluster.fork();
    }
  
  }else{
    const app = express()
    const PORT = 5500

    app.get('/', (req, res)=>{
        return res.json({
            message: `Hello Cluster ${process.pid}`
        })                                             
    })
    app.listen(PORT,()=>{
        console.log(`Server Started on ${PORT}`)
    })
  }
  
   