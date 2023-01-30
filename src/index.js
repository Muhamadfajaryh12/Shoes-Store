const express = require('express')
const shoesRoutes = require('./routes/shoes')
const app = express()
const cors =require('cors')
const mongoose = require('./config/database');
const PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.send('<h1>Welcome</h1>')
})
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/shoes',shoesRoutes)
app.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);
  });
