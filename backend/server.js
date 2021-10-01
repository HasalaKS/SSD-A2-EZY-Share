const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Config
const {port} = require("./config/config");

// Import routes
const facebookRoutes = require("./routes/facebook.routes");
const googleriveRoutes = require("./routes/googleDrive.routes");

// Initialize the app
const app = express();

// Configuring middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure routes
app.use("/api/facebook" , facebookRoutes.router);
app.use("/api/googleDrive" , googleriveRoutes.router);

// Web route
app.get("/" , (req,res) => {
    res.status(200).send("OAuth Sample Client")
})

// Start the server
app.listen(port, () => console.log(`Server Started ${port}`));