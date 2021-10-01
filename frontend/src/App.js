import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Googleauth from "./components/GoogleAuth";
import Uploadpage from "./components/UploadPage";

function App() {
  return (
    <Router>
      <Route path="/upload/auth" component={Googleauth} />
      <Route exact path="/upload" component={Uploadpage} />
    </Router>
  );
}

export default App;
