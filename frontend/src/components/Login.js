import React, { useState, useEffect } from "react";
import FacebookServices from "../services/FacebookServices";
import { Redirect } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

// Import style sheet
import "./styles/Login.css";

export default function Login(props) {
  const [fbTokenReqCode, setfbTokenReqCode] = useState(null);

  //taking authorization parameter from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    setfbTokenReqCode(code);
  }, []);

  //request access token and redirected to upload page
  useEffect(() => {
    if (fbTokenReqCode !== null) {
      FacebookServices.getToken(fbTokenReqCode).then((data) => {
        console.log("Token= " + data.access_token);
        localStorage.setItem("token", data.access_token);
      });
    }
  }, [fbTokenReqCode]);

  //redirect facebook authorization server
  const FacebookLoginFunc = (e) => {
    e.preventDefault();
    FacebookServices.getAuth().then((data) => {
      console.log(data.url);
      window.location.href = data.url;
    });
  };

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 600,
    margin: "200px auto",
  };
  const buttonStyle = {
    width: 350,
    backgroundColor: "#4267B2",
    color: "#ffffff",
  };
  const hrStyle = {
    width: 400,
    height: "0.1vh",
    color: "#808080",
    backgroundColor: "#808080",
  };

  return (
    <>
      {fbTokenReqCode !== null ? <Redirect to="/upload/auth" /> : null}

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <div className={"row"}>
            <div className={"column ml-4 mt-1"}>
              <h2>EZY Share</h2>
              <hr style={hrStyle} />
              <div className={"row ml-1"}>
                <p>EZY Share is a free and easy way to share your data.</p>
              </div>
            </div>
            <div className={"column ml-4"}>
              <img src={"./net.png"} height="130px" alt="logo" />
            </div>
          </div>
          <Grid align="center">
            <br />

            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              style={buttonStyle}
              onClick={FacebookLoginFunc}
            >
              <i className="fab fa-facebook-f fa-x mr-3" />
              <span>Sign in with facebook</span>
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
