const http  = require('http');



const server = http.createServer((req,res)=>{
    const url = req.url;
    if (url === '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome home');
      } else if (url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to About Us page');
      } else if (url === '/node') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to my Node.js project');
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found');
      }


})

server.listen(4000,()=>{
    console.log('server is running')
});
