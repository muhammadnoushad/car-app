const express = require('express');

const Provider = require('../../models/Provider');


const router = express.Router();


//provider POST
router.post('/',async(req,res)=>{
    Provider.create(req.body)
    .then((provider)=>res.json(provider))
    .catch(function(err) {
        res.json(err);
      });
});

//Get all Provider api/provider
router.get('/',async(req,res)=>{
    try{
         const data = await Provider.find();
         res.json(data);
    }catch(error){
        res.json(error)
    }
 })
 





module.exports = router;