import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CrowdSource from "./Components/CrowdSource";
import CrowdSourceDetail from "./Components/CrowdSourceDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crowdsource" element={<CrowdSource />} />
        <Route path="/crowdsource/:id" element={<CrowdSourceDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
