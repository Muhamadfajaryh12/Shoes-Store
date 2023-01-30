const mongoose = require('mongoose');

const ShoesSchema = new mongoose.Schema(
    { 
        id:{
            type:String
        },
        name_shoes:{
            type:String,
            required:true,
        },
        price_shoes:{
            type:String,
            required:true,
        },
        description_shoes:{
            type:String,
            required:true,
        },
        image_shoes:{
            type:String,
        },
    },
    {timestamps:true}
)

const Shoes = new mongoose.model('shoes',ShoesSchema);
module.exports = Shoes