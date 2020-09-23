// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express()

/* Dependencies */
const cors = require('cors');

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 8000;
const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`Server running on port: ${port}`);
}

// Initialize all route with a callback function
app.get('/all', getAll);
app.post('/post', postData)

// Callback function to complete GET '/all'
function getAll(req, res) {
    res.json(projectData);
}

// Post Route
function postData(req, res) {
    res.send("POST route")
}
