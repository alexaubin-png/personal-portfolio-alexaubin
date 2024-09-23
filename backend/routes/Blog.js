const express = require('express')
const router = require('express').Router();
const BlogPost = require('../models/Blog.js'); // Check that the path is correct


// Create a new post
router.post('/posts', async (req, res) => {
    try {
        const count = await BlogPost.countDocuments();
        let newEntry = new BlogPost({
            post_id: count + 1,
            ...req.body,
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,

        });
        await newEntry.save();
        res.status(200).json({
            message: "New post created",
            newEntry
        });
    } catch (error) {
    
        res.status(500).json({ message: `${error}` });
    }
});

// Get all comments (you may want to rename this route)
router.get('/comments', async (req, res) => {
    try {
        const results = await BlogPost.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

// Get a specific comment by title
router.get('/comments/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const result = await BlogPost.findOne({ title });
        if (!result) throw Error('No post found with that title');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

// Update a post
router.put('/put/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const foundResult = await BlogPost.findOneAndUpdate(
            { title },
            req.body,
            { new: true, runValidators: true }
        );
        if (!foundResult) throw Error('No content found for this title');
        res.status(200).json({ message: "Updated post successfully!", foundResult });
    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }
});

// Delete a post
router.delete('/delete/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const result = await BlogPost.findOneAndDelete({ title });
        if (!result) throw Error("No Post by that title was found");
        res.status(200).json({ message: "Post Successfully Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
