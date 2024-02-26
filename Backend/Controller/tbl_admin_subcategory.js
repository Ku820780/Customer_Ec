const db = require('../Modle/modle')

const admin_subcategory_data_get = (req, res) =>{
    const sql = `SELECT * FROM tbl_admin_subcategory`
    db.query(sql, (err, result)=>{
        if(err){
            console.log("admin_subcategory Data Not Get")
            res.json(err)
        }else{
            console.log("tbl_admin_subcategory Data Get SuccessFully...")
            res.json(result)
        }
    })
}

const admin_subcategory_get = (req, res) =>{
    const Pcategoryid = req.params.Pcategoryid;
    const sql = `SELECT * FROM tbl_admin_subcategory WHERE Pcategoryid = 114`
    db.query(sql, Pcategoryid, (err, result)=>{
        if(err){
            // console.log("admin_subcategory Data Not Get")
            res.json(err)
        }else{
            // console.log("tbl_admin_subcategory Data Get SuccessFully...")
            res.json(result)
        }
    })

}

const admin_subcategory_get1 = (req, res) =>{
    const Subcategoryid = req.params.Subcategoryid;
    const sql = `SELECT * FROM tbl_admin_subcategory WHERE Subcategoryid = ?`
    db.query(sql, Subcategoryid, (err, result)=>{
        if(err){
            // console.log("admin_subcategory Data Not Get")
            res.json(err)
        }else{
            // console.log("tbl_admin_subcategory Data Get SuccessFully...")
            res.json(result)
        }
    })

}

module.exports = {admin_subcategory_data_get, admin_subcategory_get, admin_subcategory_get1}