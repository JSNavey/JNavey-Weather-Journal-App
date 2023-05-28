// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('project'));

// Spin up the server and callback to debug
const port = 5000;
const server = app.listen(port, () => {
    console.log(`server is running on localhost: ${port}`);
});

// Initialize all route with a callback function
app.get("/all", getAllData)

// Callback function to complete GET '/all'
const getAllData = (req, res) => {
    res.send(projectData);
};

// Post Route
const addData = (req, res) => {
    const data = req.body;
    projectData["date"] = data.date;
    projectData["city"] = data.city;
    projectData["img"] = data.img;
    projectData["description"] = data.description;
    projectData["content"] = data.content;
};
