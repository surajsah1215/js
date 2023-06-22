const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminroutes);
app.use(shoproutes);

app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(40000,()=>{
    console.log('server running');
})