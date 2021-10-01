const express = require("express");
const router = express.Router();

// Import Controller
const FacebookOauthCtrl = require("../controller/facebook.controller");

router.route("/getAuthURL")
    .get(FacebookOauthCtrl.getAuthURL)

router.route("/getToken")
    .post(FacebookOauthCtrl.getToken)

module.exports = {
    router
}