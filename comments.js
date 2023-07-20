//Create a web server that can listen to requests for /comments and send back the JSON file, comments.json, to the user.

// Import the express library here
const express = require('express');

// Instantiate the app here
const app = express();

// Instantiate the comments here
const comments = require('./comments.json');

// Implement the route handler here
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Instantiate the server here
app.listen(4001, () => {
    console.log('Server is listening on port 4001');
});
