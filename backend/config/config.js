const port = process.env.PORT || 8000;

// facebook configurations
const facebook_client_id = "Your cliend ID";
const facebook_client_secret = "Your client secret";
const facebook_redirect_uri = "http://localhost:3000";

module.exports = {
    port,
    facebook_client_id,
    facebook_client_secret,
    facebook_redirect_uri
}