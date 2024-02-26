const express = require('express')
const { admin_subcategory_data_get, admin_subcategory_get, admin_subcategory_get1 } = require('../Controller/tbl_admin_subcategory')
const Subcategory = express.Router()

Subcategory.get('/api/admin/subcategoryData/get', admin_subcategory_data_get)
Subcategory.get('/api/customer/subcategoryData/:Pcategoryid', admin_subcategory_get)
Subcategory.get('/api/customer/SubcategoryidData/:Subcategoryid',admin_subcategory_get1)

module.exports = {Subcategory}