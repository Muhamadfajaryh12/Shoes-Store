const express = require('express');
const ShoesController = require('../controller/shoes.js')
const router = express.Router();

router.get('/',ShoesController.getAllShoes);
router.post('/post',ShoesController.uploadImg,ShoesController.createShoes)
module.exports = router;