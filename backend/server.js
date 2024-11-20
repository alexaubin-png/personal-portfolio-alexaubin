const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { connect } = require('./db.js');



// Connect to MongoDB
connect();

// Middleware


app.use(cors({
    origin: ['http://localhost:5173', 'https://personal-portfolio-alexaubin.vercel.app'],  // replace with your frontend URL
    credentials: true, // enable cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']  // replace with your allowed headers
 
}));
app.use(express.json()); // Correct usage: invoke express.json() to use JSON parsing middleware

// Routes
const blogRoutes = require('./routes/Blog'); // Ensure the path is correct
app.use('/api', blogRoutes);

const authRoutes = require('./routes/authRoutes');
 app.use('/users', authRoutes);

const PORT = process.env.PORT 


//needed middleware to be in server.js for blogs loocated in Routes folder


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
