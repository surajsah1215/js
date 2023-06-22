const path = require('path');

const express = require('express');

const getproductcontroller = require('../controllers/product')

const router = express.Router();

router.get('/',getproductcontroller.getproducts );

module.exports = router;
