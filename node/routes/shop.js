const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const res = require('express/lib/response');

const router = express.Router();

router.get('/',(req,res,next)=>{
   
    res.sendFile(path.join(rootDir, 'views','shop.html'));
})

router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
})

router.post('/success',(req,res)=>{
    res.send('<h1>Form successfully filled</h1>')
})
module.exports = router;