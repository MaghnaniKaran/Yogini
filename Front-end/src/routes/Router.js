import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../views/Home.js";
import Gallery from "../views/Gallery.js";
import About from "../views/About.js";
import Contact from "../views/Contact.js";
import Login from "../views/Login.js";
import Registration from "../views/Registration.js";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
  </Routes>
);

export default routes;
