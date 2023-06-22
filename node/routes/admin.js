const express = require('express');

const path = require('path');
const rootDir = require('../util/path')

router = express.Router();

router.get('/add-products',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;