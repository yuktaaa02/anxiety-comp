const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// Add this line after your imports
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

const app = express();

// Middleware
app.use(express.json()); // Allows the server to read JSON data from your frontend
app.use(cors()); // Allows your mobile app to talk to this server

// Connect to MongoDB
// Note: You will need your MongoDB URI from Atlas soon!
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Anxiety Companion API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});