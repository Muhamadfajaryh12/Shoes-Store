    const Shoes = require('../models/shoes');
    const {ObjectId} = require('mongodb')
    const cloudinary = require('cloudinary').v2;
    const {CloudinaryStorage} = require('multer-storage-cloudinary');
    const multer = require('multer');

    cloudinary.config({
        cloud_name:'webeer',
        api_key:'447617849736884',
        api_secret:'LW69GSs3E5G5aZmesVOazw3nszs'
    })
    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
          folder: 'Webeer',
        },
      });
    const uploadImg = multer({ storage }).single('image_shoes');

    const createShoes = async(req,res) =>{
        const {
            name_shoes,
            price_shoes,
            description_shoes
        } = req.body
        const {filename:image_shoes} = req.file;
        const productImg = cloudinary.url(`${image_shoes}.webp`,{
            width: 700, height: 600, crop: 'scale', quality: 70,
        })
        const id = new ObjectId();
        const newShoes = new Shoes({
            id:id,
            name_shoes,
            price_shoes,
            description_shoes,
            image_shoes:productImg
        });
        try{
            const SaveShoes = await newShoes.save()
            res.status(201).json({
                status:"success",
                message:"Sukses menambahkan sepatu",
                data:SaveShoes
            })
        }
        catch(error){
            res.status(500).json({
                status:"error",
                message:"Gagal menambahkan sepatu"
            })
        }
    }

    const getAllShoes = async(req,res)=>{
        try{
            const shoes = await Shoes.find()
            res.status(200).json({
                status:"success",
                message:'Success',
                data:shoes
            })
        }
        catch (error){
            res.status(500).json({
                message:'Server Error',
                error:true
            })
        }
    }

module.exports ={
    getAllShoes,
    uploadImg,
    createShoes
}
