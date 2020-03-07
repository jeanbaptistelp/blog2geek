const express = require('express')
const router = express.Router();
// import du model
const Post = require('../models/Posts');

router.post('/', async (req, res) => {
    console.log(req.body); // montre l'info que l'on va voir dans le la requete

    const post = new Post({ // création d'une variable qui va contenir le body du post
        title : req.body.title,
        description : req.body.description
    })


    try {

   const savedPost = await post.save()
    res.json(savedPost);
    }catch (err){
        res.json({ message : err })
    }
})


// route principal
router.get('/',  async (req, res) => {
    
    try {
        
        const posts = await Post.find();
        res.json(posts);

    } catch (err){
        res.json({ message : err })
    }
    
})

// route actus
router.get('/actus',  async (req, res) => {
    
    try {
        
        const posts = await Post.find({ category : 'actus' });
        res.json(posts);

    } catch (err){
        res.json({ message : err })
    }
    
})





module.exports = router; 