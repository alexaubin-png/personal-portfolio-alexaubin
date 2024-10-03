const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI
console.log(MONGO_URI)
async function connect() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error(error);
    }
};


module.exports = { connect, mongoose }
