const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminroutes);
app.use(shoproutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>PAGE NOT FOUND</h1>');
})


app.listen(4000,()=>{
    console.log('server running');
})