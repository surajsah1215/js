const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./models/user')
const Product = require('./models/product');
const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { where } = require('sequelize');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    User.findAll({where:{id:1}})
    .then(user=>{
        req.user = user;
        next();
    })
    .catch(err=>console.log(err))
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404); 

Product.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
User.hasMany(Product);

sequelize.sync()
.then(result=>{
   return User.findAll({where:{id:1}})
}).then(user=>{
    if(!user){
        return User.create({name:'max',email:'max@gmail.com'});
    }
    return user;
})
.then(userr=>{
    app.listen(30000);
})
.catch(err=>console.log(err))

// app.listen(30000);
