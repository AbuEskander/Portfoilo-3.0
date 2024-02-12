import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./Components/Projects.js";
import Header from "./Components/Header.js";
import Contact from "./Components/Contact.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
