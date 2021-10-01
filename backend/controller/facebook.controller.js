const axios = require('axios');

// Import configurations
const {facebook_client_id , facebook_client_secret ,facebook_redirect_uri} = require("../config/config");

// Get the authorizarion url
const getAuthURL = async (req , res) => {
    const authUrl = `https://www.facebook.com/v6.0/dialog/oauth?client_id=${facebook_client_id}&redirect_uri=http://localhost:3000`
    console.log(authUrl);
    return res.send({url :authUrl});
}

// Get the token
const getToken = async (req , res) => {
    try {
        const authCode = req.body.code;
        console.log('Backend code: '+req.body.code);
        const accessTokenUrl = 'https://graph.facebook.com/v6.0/oauth/access_token?' +
          `client_id=${facebook_client_id}&` +
          `client_secret=${facebook_client_secret}&` +
          `redirect_uri=http://localhost:3000/&` +
          `code=${encodeURIComponent(authCode)}`;
    
        const accessToken = await axios.get(accessTokenUrl).then(res => res.data['access_token']);

        console.log('Access token is= ', {access_token: accessToken});
        res.send({access_token: accessToken});
    
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.response.data || err.message });
      }
}

module.exports = {
    getAuthURL,
    getToken
}