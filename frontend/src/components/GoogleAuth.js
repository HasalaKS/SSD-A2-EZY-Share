import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { Grid, Paper } from "@material-ui/core";

export default function Googleauth(props) {
  const paperStyle = {
    padding: 10,
    height: "60vh",
    width: 700,
    margin: "130px auto",
  };

  return (
    <>
      <div className={"container mt-3"} style={{ backgroundColor: "#FDFEFD" }}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <div className={"row"}>
              <div className={"col-md-12 text-center"}>
                <h1 className={"mt-3"}>Hi Nishith!</h1>
                <div className={"d-flex justify-content-center mt-4"}>
                  <p style={{ maxWidth: "600px" }}>
                    <i>
                      Welcome to EZY Share! We offer free file upload, file
                      sharing and file transfer service without any need for
                      registration. Upload your files and share them with your
                      friends.
                    </i>
                  </p>
                </div>
                <hr style={{ background: "#333547", width: 600 }} />
              </div>
            </div>

            <br />
            <div className={"row mt-4 homePageOptionWrapper"}>
              <div className={"column mr-5 ml-5"}>
                <Button
                  color={"success"}
                  style={{ width: "10rem", height: "10rem" }}
                >
                  <div className="p-3">
                    <h3>
                      <i className="fab fa-facebook" />
                    </h3>
                    Upload files to{" "}
                    <div>
                      <b>Facebook</b>
                    </div>
                  </div>
                </Button>
              </div>
              <div className={"column mr-5"}>
                <Button
                  color={"warning"}
                  style={{ width: "10rem", height: "10rem" }}
                  onClick
                >
                  <div className="p-3">
                    <h3>
                      <i className="fab fa-google-drive"></i>
                    </h3>
                    Upload files to{" "}
                    <div>
                      <b>Google Drive</b>
                    </div>
                  </div>
                </Button>
              </div>
              <div>
                <Button
                  color={"primary"}
                  style={{ width: "10rem", height: "10rem" }}
                >
                  <div className="p-3">
                    <h3>
                      <i className="fab fa-linkedin"></i>
                    </h3>
                    Upload files to{" "}
                    <div>
                      <b>LinkedIn</b>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </div>
    </>
  );
}
