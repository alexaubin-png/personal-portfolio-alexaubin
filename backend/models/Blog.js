const { mongoose } = require("../db.js");

const blogPostSchema = new mongoose.Schema({
    post_id: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;
