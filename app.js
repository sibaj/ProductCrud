const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const product_route=require("./route/product.route");

const port=1234;
const app=express();


let dev_db_url="mongodb://sibajyoti:sibajyoti1@ds123532.mlab.com:23532/producttutorial"
let MONGDB=process.env.MONGODB_URI || dev_db_url;
mongoose.connect(MONGDB);
mongoose.Promise=global.Promise;
const db=mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/product', product_route);


app.listen(port,()=>{
    console.log("serve is running at port number "+port);
})
