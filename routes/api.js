const express = require('express')

const router = express.Router()

const mongoose = require('mongoose');

const cart = require('../models/cart');

const Product = require('../models/product');


const db="mongodb://localhost:27017/second"

mongoose.connect(db,(error)=>{
    if(error)
    {
        console.log('error'+error)
    }
    else{
        console.log('connected to db')
    }
})

router.get('/',(req,res)=>{
    res.send('api route')
})

router.get('/products1',(req,res)=>{
    let products1=[
        {
            'product_id':1,
            'product_name':'LARQ Bottle Filtered',
            'price':49.95,
            'isavailable':true,
            'stock':44,
            'totalReview':5219,
            '500ml-available':true,
            '740ml-available':true,
            'img-url':''
        },
        
    ]

    res.json(products1)
})


const p1 = new Product({
    product_id:1,
    product_name:'LARQ Bottle Filtered',
    price: 49.95

})

const p2 = new Product({
    product_id:2,
    product_name:'LARQ Bottle PureVis',
    price: 99.00

})

const p3 = new Product({
    product_id:3,
    product_name:'LARQ Pitcher PureVis',
    price: 135.00

})




router.post('/cart',(req,res)=>{
    let cbody =req.body.id
    
    console.log(cbody);

    Product.find({product_id:cbody},function(err,pro){
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log(pro)
            
        }
    })

})






module.exports=router


