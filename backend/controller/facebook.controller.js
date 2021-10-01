const axios = require('axios');

// Import configurations
const {facebook_client_id , facebook_client_secret ,facebook_redirect_uri} = require("../config/config");

// Get the authorizarion url
const getAuthURL = async (req , res) => {
    const authUrl = `https://www.facebook.com/v6.0/dialog/oauth?client_id=${facebook_client_id}&redirect_uri=http://localhost:3000`
    console.log(authUrl);
    return res.send({url :authUrl});
}

module.exports = {
    getAuthURL
}