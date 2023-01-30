const mongoose = require('mongoose');

const SizeSchema = new mongoose.Schema9({
    id:{
        type:String
    },
    size_shoes:{
        type:String,
        required:true,
    },
    shoes:[
        {
            type:Schema.Types.ObjectId,
            ref:'shoes'
        }
    ]
})


const Size = new mongoose.model('size', SizeSchema);
module.exports = Size