const express = require('express')
const router = express.Router()
const BlogPost = require('../models/Blogs.js')

router.post('/posts', async (req, res) => {
    try{
        const count = await BlogPost.countDoucments()
        let newEntry = new BlogPost({
                post_id: count + 1,
                title: req.body.title,
                content: req.body.content,
                author: req.body.author
            })
            await newEntry.save()
            res.status(200).json({
                message: "New post created successfully",
                newEntry
            }
            )
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }

})

router.get('/comments', async (req, res)=> {
    try{
        const posts = await BlogPost.find({})
        res.status(200).json(posts)
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
})
router.put('/put', async (req, res) => {
    try{
        const post = await BlogPost.findByIdAndUpdate(req.body.post_id, req.body, {new: true})
        if(!post) return res.status(404).json({message: 'Post not found'})
        res.status(200).json({message: 'Post updated successfully', post})
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }
})