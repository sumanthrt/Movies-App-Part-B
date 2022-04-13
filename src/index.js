import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
// import Controller from './screens/Controller';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/home/Home';
import Details from './screens/details/Details';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      {/* <Route exact path="/booknow" element={<BookShow />} /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
