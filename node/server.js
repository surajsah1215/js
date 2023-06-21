const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log('In the middleware');
    next();
})

app.use('/add-products',(req,res,next)=>{
    console.log('add products');
    res.send('<form action="/product" method="POST"><input type="number" name="size"><input type="text" name="title"><button type="submit">Add product</button></form>')
})
let data ={
    size:null,
    title :null
};
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    data.size = req.body.size;
    data.title = req.body.title
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    console.log('In the second middleware');
    res.send(`<h1>Hello from express </h1> ${data.size} ${data.title}`)
})

app.listen(4000,()=>{
    console.log('server running');
})