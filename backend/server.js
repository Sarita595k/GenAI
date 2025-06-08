// server.js
const express = require('express');
const dotenv = require('dotenv');

// dotenv file config
dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Port created
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
