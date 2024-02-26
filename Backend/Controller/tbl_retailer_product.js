const db = require('../Modle/modle')

const view_product_details = (req, res) => {
    const pid  = req.params.Subcategoryid;
    // console.log(pid)
    const sql = `SELECT * FROM tbl_retailer_product WHERE Subcategoryid = '${pid}'`

    db.query(sql, (err, result)=>{
        if(err){
            // console.log("Product Details not Get...")
            res.json(err)
        }else{
            // console.log("Product Details Get SuccessFully...")
            res.json(result)
        }
    })
}

const view_product = (req, res) => {
    const pid  = req.params.pid;
    // console.log(pid)
    const sql = `SELECT * FROM tbl_retailer_product WHERE pid = '${pid}'`

    db.query(sql, (err, result)=>{
        if(err){
            console.log("Product Details not Get...")
            res.json(err)
        }else{
            console.log("Product Details Get SuccessFully...")
            res.json(result)
        }
    })
}

module.exports = {view_product_details, view_product}