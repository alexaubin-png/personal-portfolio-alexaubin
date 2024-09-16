const router = require('express').Router();
const dbPath = './backend/db.js'
const { read, save } = require('../readwrite.js')

router.get('/comments', (req, res) => {
try{
const result = read(dbPath)
console.log(result)
res.status(200).json({message: `${err}`})
}catch(error){
console.log(error)
res.status(500).json({message: `${err}`})
}
})

router.get('/comments/:title', (req, res) => {
 try{
const {title} = req.params                                                                              
const result = read(dbPath)
const filteredResults = result.find(comment => comment.title === title)
console.log(filteredResults)
if(!filteredResults)throw Error('No post found with that title')
    res.status(200).json(filteredResults)
 }catch(error){
console.log(error)
res.status(500).json({message: `${error}`})
 } 
})
router.post('/posts', (req,res)=>{
try{
const result = read(dbPath)

let newEntry = { post_id: result.length + 1, ...req.body }
result.push(newEntry)//alowwing for us to create a new entry in the database by pushing the new entry
save(result, dbPath)//saves result and dbpath
res.status(200).json({
    message: "New post created",//sends user feedback(user experience is very important)
    newEntry
})
}catch(error){
    res.status(500).json({message: `${error}`})
}
})
router.put('/put/:title', (req,res)=>{
    try{
        const result = read(dbPath)
        const {title} = req.params
        const foundResult = result.find(post=> post.title === title)
        if(!foundResult)throw Error('no content found for this title')

            foundResult.title = req.body.title ?? foundResult.title //able to add a new author, title, or body
            foundResult.author = req.body.author ?? foundResult.author
            foundResult.body = req.body.body ?? foundResult.body
            save(result, dbPath)
            res.status(200).json({ message: "Updated post successfully!", foundResult})
    }catch(error){
        console.log(error)
        res.status(500).json({message: `${error}`})
    }
})
router.delete('/delete/:title', (req, res) => {//deletes data straight from the database, to get the data back or even delete in the first place you need to use the get requests
    try {

  const title = req.params.title//specefies the title and the req params aka assigning properties to the title varible
  let result = read(dbPath)//very important to always read the database
  const filteredResult = result.filter(post=>post.title !== title)//the filtered result variable will be assigned to filter the result to a posts specefic title, which is has logic for deleting the title.
if(filteredResult.length === result.length)throw Error ("No Post by that title was found");
save(filteredResult, dbPath);
res.status(200).json({message: "Post Successfully Deleted"})


    } catch (error) {
       res.status(500).json({message: error.message })
    }
})
module.exports = router                                                                