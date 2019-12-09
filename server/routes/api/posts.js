const express = require('express');
const Post = require('../../models/Post');


const router = express.Router();

//Get all posts api/posts
router.get('/',async(req,res)=>{
   try{
        const data = await Post.find();
        res.json(data);
   }catch(error){
       res.json(error)
   }
})


//POST posts api/posts
router.post('/',async(req,res)=>{
   const post =  new Post({
       title : req.body.title,
       description : req.body.description
   });
   try{
   const savedPost = await post.save();
   res.json(savedPost);
   }
   catch(error){
    res.json(error)
   }
  
});

//find post api/posts/:id

router.get('/:postID',async(req,res)=>{
     try{
    const post =  await Post.findById(req.params.postID);
    res.send(post);
    }catch(error)
    {
        res.send(error);
    }
    
})

//delete post api/posts/:id
router.delete('/:postID',async(req,res)=>{
    try{
   const post =  await Post.findByIdAndDelete(req.params.postID);
   res.send(post);
   }catch(error)
   {
       res.send(error);
   }
   
})

//update post api/posts/:id
router.patch('/:postID',async(req,res)=>{
    try{
   const post =  await Post.updateOne(
        {_id:req.params.postID},
        { $set: { title:req.body.title } } 
    );
   res.send(post);
   }catch(error)
   {
       res.send(error);
   }
   
})




module.exports = router;