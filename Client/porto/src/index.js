import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./Components/Projects";
import Header from "./Components/Header.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
