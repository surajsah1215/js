const express = require('express');

const 

router = express.Router();

router.get('/add-products',(req,res,next)=>{
    console.log('add products');
    res.send('<form action="/admin/product" method="POST"><input type="number" name="size"><input type="text" name="title"><button type="submit">Add product</button></form>')
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;