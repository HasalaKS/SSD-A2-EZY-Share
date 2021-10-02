# EZY-Share: OAuth 2.0 Demo

EZY-Share is a web application created to demonstrate the usage of OAuth 2.0 authorization framework as a part of an assignment related to the SSD module. EZY-Share allows users to login to their Facebook account and upload files to Google Drive. Techstack includes React.js, Express.js, and Node.js. 

## Guide

This application requires Node.js installed. Apart from that, you also need to have test applications running on both Google Cloud Platform and Facebook for Developers. 

1. Clone this GIT repository and run the following commands in both the frontend and backend folder to install the required node modules. 

```
$ npm install
```

2. Copy the client ID and the client secret of the Facebook test application and paste it on config/config.js. Afterwards, download the credentials.json of the Google test application, rename it to **googleDriveCredentials.json**, and paste it in the backend folder. 

3. Run the following command in both the backend and the frontend folders.

```
$ npm start
```

## Contributions

- @HasalaKS
- @nishith-p
- @kavithish
- @avishkat
