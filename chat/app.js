const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res,next)=>{
    fs.readFile("message.txt",(err,data)=>{
        
    if(err){
        data = "No chat exists"
        console.log(err);
    }
    res.send(`${data}<form action="/" onSubmit="document.getElementbyId('username').value=localStorage.getItem('username')"
    method="POST">
    <input type="text" name="message" id="message" placeholder="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">Send</button>
    </form>`)
    })
   
})

app.post('/',(req,res)=>{
    console.log(req.body)
    fs.writeFile("message.txt",`${req.body.username} : ${req.body.message}`, {flag : 'a'}, (err)=>{
        err? console.log(err) : res.redirect('/')
    })
})


app.get('/login',(req,res,next)=>{
    res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">

	<input id="username" type="text" name"username">

	<button type="submit">add</button>

</form>`)
})

app.post('/',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log('server is running');
})
