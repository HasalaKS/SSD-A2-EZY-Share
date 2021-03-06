const { google } = require("googleapis");
const formidable = require("formidable");
const fs = require("fs");

// Import Client credentials
const credentials = require("../googleDriveCredentials.json");
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

// Upload the file
const uploadFile = async (req, res) => {
    var form = new formidable.IncomingForm();
  
    form.parse(req, (err, fields, files) => {
      if (err) return res.status(400).send(err);  
      const token = JSON.parse(fields.token);
  
      if (token == null) return res.status(400).send("Token not found");
      oAuth2Client.setCredentials(token);
    
      const drive = google.drive({ version: "v3", auth: oAuth2Client });
      const fileMetadata = {
        name: files.file.name,
      };
  
      const media = {
        mimeType: files.file.type,
        body: fs.createReadStream(files.file.path),
      };
  
      drive.files.create(
        {
          resource: fileMetadata,
          media: media,
          fields: "id",
        },
        (err, file) => {
          oAuth2Client.setCredentials(null);
          if (err) {
            res.status(400).send(err);
          } else {
            return res.send({ msg: "Successful" });
          }
        }
      );
    });
  };

// Exports the methods
module.exports = {
    getAuthURL,
    getToken,
    uploadFile
};