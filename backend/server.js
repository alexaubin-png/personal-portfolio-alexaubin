const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { connect } = require('./db.js');


// Connect to MongoDB
connect();

// Middleware
app.use(cors());
app.use(express.json()); // Correct usage: invoke express.json() to use JSON parsing middleware

// Routes
const authRoutes = require('./routes/authRoutes');
 app.use('/users', authRoutes);

const PORT = process.env.PORT 




// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
