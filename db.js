require('dotenv').config(); // Load environment variables at the top
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'restaurantDB' // Ensure the correct database name is used
        });

        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error.message);
        process.exit(1); // Stop the server if the database connection fails
    }
};

module.exports = connectDB;
