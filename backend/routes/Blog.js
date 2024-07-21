const router = require('express').Router();
const dbPath = './backend/db.js'
const { read, save } = require('../readwrite.js')

router.get('/', (req, res) => {
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
router.post('/post', (req, res) => {
    try{
const result = read(dbPath)
let newEntry = {post_id: result.length + 1, ...req.body}
result.push(newEntry)
save(result, dbPath)
res.status(200).json({
    message: 'Post added successfully',
    newEntry
})
    }catch(error){
        res.status(500).json({message: error.message})
    }

})