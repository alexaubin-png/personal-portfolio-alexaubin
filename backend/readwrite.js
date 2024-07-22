const fs = require('fs')

function save(data, path){
    fs.writeFile(path, JSON.stringify(data), function(err){
if(err){
    return console.error(err)
}
    })
}``
function read(path){
    const file = fs.readFileSync(path)
    return !file.length ? [] : JSON.parse(file)
}
module.exports = {
    read, save
}