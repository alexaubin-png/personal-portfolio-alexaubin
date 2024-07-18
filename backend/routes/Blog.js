const express = require('express');
const PORT = 8080
const app = express();

app.get('/posts', (req, res) => {


})

app.post('/createPosts', (req, res) => {


})

app.put('/updatePost', (req, res) => {
    // Update a post
    const foundPost = findByIdAndUpdate(req.body.post)
})


app.delete('deletePost', (req, res) => {

})