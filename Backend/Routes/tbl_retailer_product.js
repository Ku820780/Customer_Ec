const express = require('express')
const { view_product_details, view_product } = require('../Controller/tbl_retailer_product')
const Product = express.Router()


Product.get('/api/details/get/:Subcategoryid', view_product_details)
Product.get('/api/details/:pid', view_product)

module.exports = Product