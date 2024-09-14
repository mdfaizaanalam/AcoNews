require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from .env or fallback to 5000
const API_KEY = process.env.API_KEY; // Use environment variable

app.use(cors());
app.use(express.json());

// Fetch news from GNews API
app.get('/news', async (req, res) => {
    const { keyword, country, category, language, page } = req.query;
    const url = `https://gnews.io/api/v4/search?q=${keyword || 'latest'}&lang=${language || 'en'}&country=${country || 'us'}&category=${category || ''}&page=${page || 1}&apikey=${API_KEY}`;

    try {
        const response = await axios.get(url);
        console.log('API Response:', response.data); // Log response
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error.response ? error.response.data : error.message); // Log the error
        res.status(500).json({ error: 'Error fetching news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
