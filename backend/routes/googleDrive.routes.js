const express = require("express");
const router = express.Router();

// Import Controller
const GoogleDriveOauthCtrl = require("../controller/googleDrive.controller");

// Define the routes
router.route("/getAuthURL")
    .get(GoogleDriveOauthCtrl.getAuthURL)

router.route("/getToken")
    .post(GoogleDriveOauthCtrl.getToken)