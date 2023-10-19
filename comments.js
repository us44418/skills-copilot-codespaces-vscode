// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create server
const app = express();

// Import routes
const comments = require('./routes/comments');

// Use modules
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/comments', comments);

// Listen port
app.listen(3000);
console.log('Server on port', 3000);