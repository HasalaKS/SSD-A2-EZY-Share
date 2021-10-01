const { google } = require("googleapis");
const formidable = require("formidable");
const fs = require("fs");

// Import Client credentials
const credentials = require("../credentials.json");
const client_id = credentials.web.client_id;
const client_secret = credentials.web.client_secret;
const redirect_uris = credentials.web.redirect_uris;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Define the scope
const SCOPE = [
  "https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file",
];

// Get the authorizarion url
const getAuthURL = async (req, res) => {
    // Generate the authorizarion url
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPE,
    });
    return res.send({ url: authUrl });
  };

// Get the access token
const getToken = async (req, res) => {
    if (req.body.code == null) return res.status(400).send("Invalid Request");
    // Get access token from the google authorizarion server
    oAuth2Client.getToken(decodeURIComponent(req.body.code), (err, token) => {
      if (err) {
        return res.status(400).send("Error retrieving access token");
      }
      return res.send(token);
    });
  };

  module.exports = {
    getAuthURL,
    getToken
  };