import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CrowdSource from "./Components/CrowdSource";
import CrowdSourceDetail from "./Components/CrowdSourceDetail";
import Concerts from "./Components/Performance";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crowdsource" element={<CrowdSource />} />
        <Route path="/crowdsource/:id" element={<CrowdSourceDetail />} />
        <Route path="/performance" element={<Concerts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
