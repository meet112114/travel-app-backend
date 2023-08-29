const express = require('express');

const router = express.Router();
require('../database/connection');

const Place = require('../models/userSchema');

router.post('/upload', async(req , res) => {
    const {  title , category, description , rating , image, location , images } = req.body; 

    if ( !title || !category|| !description || !image || !location ) {
        return  res.status(422).json({error : `plz fill all fields properly`});
    }
    
    try{

        const place = new Place({  title , category, description , rating , image, location , images }); 
        await  place.save();   
        res.status(201).json({ message : 'user regisered successfully'});
        console.log(place);
    }catch(err){
        console.log(err);
    }


}) 

router.get('/getdata', async (req , res)=>{
    try{
        const placedata = await Place.find({});
        res.send({placedata});
    }catch(error){
        console.log(error);
    }
})

 module.exports = router;