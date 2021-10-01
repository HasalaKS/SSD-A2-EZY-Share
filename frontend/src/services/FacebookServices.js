// eslint-disable-next-line import/no-anonymous-default-export
export default {

    //calling backend to retrieve auth URL
    getAuth: () => {
      return fetch("http://localhost:8000/api/facebook/getAuthURL").then((response) => {
        if (response.status != 401) {
          return response.json().then((data) => data);
        } else {
          return { message: { msgBody: "Unauthorized" }, msgError: true };
        }
      });
    },

    //calling backend to retrieve access token
    getToken: (reqCode) => {
      return fetch("http://localhost:8000/api/facebook/getToken", {
        method: "post",
        body: JSON.stringify({code: reqCode}),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.status != 401) {
          return response.json().then((data) => data);
        } else {
          return { message: { msgBody: "Unauthorized" }, msgError: true };
        }
      });
    },

    //calling backend to retirve user details
    getUserDetails: (access_token) => {
      return fetch(`http://localhost:8000/api/facebook/getUserDeatils/`+ access_token).then((response) => {
          if (response.status != 401) {
            return response.json().then((data) => data);
          } else {
            return { message: { msgBody: "Wrong access token" }, msgError: true };
          }
        })
      }
  };