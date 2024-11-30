const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { connect } = require('./db.js');

// Connect to MongoDB
connect();

// CORS Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',  // Local frontend during development
    'https://personal-portfolio-alexaubin.vercel.app'  // Deployed frontend URL
  ],
  credentials: true,  // Allow cookies to be sent with requests (useful for sessions or tokens)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow these headers to be sent
}));

// Middleware for parsing JSON bodies
app.use(express.json());  // Parse JSON bodies in requests

// Routes
const blogRoutes = require('./routes/Blog');  // Blog-related routes
app.use('/api', blogRoutes);  // Use '/api' as the base route for blog routes



   

const authRoutes = require('./routes/authRoutes');  // Authentication-related routes
app.use('/users', authRoutes);  // Use '/users' as the base route for authentication routes

// Set up the server to listen on the port defined in the environment variables
const PORT = process.env.PORT || 8080;  // Default to port 8080 if not specified in environment

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
