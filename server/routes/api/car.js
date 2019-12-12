const express = require('express');
const Car = require('../../models/Car');
const router = express.Router();


//Get all posts api/car
// router.get('/',async(req,res)=>{
//     try{
//          const data = await Car.find();
//          res.json(data);
//     }catch(error){
//         res.json(error)
//     }
//  })


//get all cars and provider
 router.get('/',async(req,res)=>{
 Car.find().populate('providers', 'name image phone email').exec(function(err, story) {
    res.send(story)
  });
})

//get All cars by provider
//  router.get('/:id',async(req,res)=>{
//  Car.find({ providers: req.params.id }).populate('car', 'title').exec(function(err, story) {
//     res.send(story)
//   });
// })
  

// POST api/car 
router.post('/',async(req,res)=>{
    Car.create(req.body)
    .then((cars)=>res.json(cars))
    .catch(function(err) {
        res.json(err);
      });
});
   






module.exports = router;