const { json } = require('body-parser');
const fs = require('fs')
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data', 'product.json'
);

const getProductsFromFile = (cb) =>{
  
     fs.readFile(p,(err,data)=>{
        if(err){
            cb([]);
        }
        else{
            cb(JSON.parse(data));
        }
    })
}

module.exports = class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        // products.push(this);
       getProductsFromFile(product =>{
        product.push(this);
        fs.writeFile(p, JSON.stringify(product),(err)=>{
            console.log(err);
        })
       })
    
    }

    static fetchAll(cb){
       getProductsFromFile(cb);
    }
}