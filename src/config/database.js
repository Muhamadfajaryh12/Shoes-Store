const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,})
.then(()=>{
  console.log('Connect to MongoDB');
}).catch((err)=>{
  console.log('failed',err)
});

module.exports=mongoose