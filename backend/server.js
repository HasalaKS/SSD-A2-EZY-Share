const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Config
const {port} = require("./config/config");

// Initialize the app
const app = express();

// Configuring middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Web route
app.get("/" , (req,res) => {
    res.status(200).send("OAuth Sample Client")
})

// Start the server
app.listen(port, () => console.log(`Server Started ${port}`));