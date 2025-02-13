const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes'); // Import user routes

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Register the user routes
app.use('/api', userRoutes); // This will map /api/users to the POST route in userRoutes.js

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
