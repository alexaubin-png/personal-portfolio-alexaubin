const { mongoose }= require('../db.js')
const blogPostSchema = new mongoose.Schema({
post_id: {type: Number, require: true},
title: {type: String, required: true},
content: {type: String, require: true},
author: {type: String, required: true}
})
const BlogPost = mongoose.model('Blogpost', blogPostSchema)
module.exports = BlogPost