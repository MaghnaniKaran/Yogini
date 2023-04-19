import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "../App";
import Home from "../views/Home.js";
import About from "../views/About.js";
import Contact from "../views/Contact.js";
import Login from "../views/Login.js";
import Registration from "../views/Registration.js";

const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
  </Routes>
);

export default routes;
