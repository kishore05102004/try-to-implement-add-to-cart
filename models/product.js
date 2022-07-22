const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    product_id: {
        type : Number,
        require: true
    },
    product_name: {
        type: String,
        require : true
    },
    price:{
        type: Number,
        require: true
    },
    imgurl:{
        type: String,
        
    },
    
});


module.exports= mongoose.model('product',ProductSchema)