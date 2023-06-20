
const fs = require('fs');

const handler = (req,res)=>{ 
const url = req.url;
const method = req.method;
if(url  === '/'){
   fs.readFile("message.txt", {encoding: "utf-8" },(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(" data---> "  + data);
    res.write("<html>");
    res.write("<head><title>Enter message </title><head>");
    res.write(`<body>${data}</body>`);
    res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type ="submit">Send</button></form></body>');
    res.write("</html>");
    return res.end();
   }); 
//    res.write('<html>');
//    res.write('<head><title>Enter message </title><head>');
//    res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type ="submit">Send</button></form></body>');
//    res.write('</html>');
//    return res.end();

}

if(url === '/message' && method === 'POST'){

const body = [];
req.on('data',(chunk)=>{
    body.push(chunk);
})
return req.on('end',()=>{
    const parsedbody = Buffer.concat(body).toString();
    const message = parsedbody.split('=')[1];
    fs.writeFile('message.txt',message,(err)=>{
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
        
    });
    
})


}


//    res.setHeader('Content-Type','text/html');
//    res.write('<html>');
//    res.write('<head><title>My first Page </title><head>');
//    res.write('<body><h1>Hello my first node.js server!</h1></body>');
//    res.write('</html>');
//    res.end();

}

module.exports = handler;