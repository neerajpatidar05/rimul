import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import 'animate.css';
// import "~animate.css/animate.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}

      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
