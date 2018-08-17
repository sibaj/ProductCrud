
const Product = require("../model/product.model");

exports.test = function(req,res){
    console.log("test function called");
    res.send("greeting from test controller");
}

exports.product_create=function(req,res){
    
    console.log("request object", req.body);
    let product=new Product({
        name:req.body.name,
        price:req.body.price
    })


    product.save(function(err){
        if(err){
            console.log("error");
            next(err);
        }
        res.send("product created");
    })
}

exports.product_details=function(req,res){
    Product.findById(req.params.id, function(err, product){
        if(err){
            return next(err);
        }
        res.send(product);
    })
}

exports.product_update=function(req,res){
    Product.findByIdAndUpdate(req.params.id,{$set: req.body}, function(err, product){
        if(err){
            return next(err);
        }
        res.send("Product updated");
    })
}

exports.product_delete=function(req,res){
    Product.findByIdAndRemove(req.params.id, function(err, product){
        if(err){
            return next(err);
        }
        res.send("Product deleted");
    })
}