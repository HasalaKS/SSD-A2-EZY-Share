const port = process.env.PORT || 8000;

// facebook configurations
const facebook_client_id = 346633970543794;
const facebook_client_secret = "967df0d8654933450b09867f87f9601b";
const facebook_redirect_uri = "http://localhost:3000";

module.exports = {
  port,
  facebook_client_id,
  facebook_client_secret,
  facebook_redirect_uri,
};
