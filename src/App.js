import React from "react";
import { Routes, Route } from "react-router-dom";
import Apps from "./routes/Apps";
import Home from "./routes/Home";
import Info from "./routes/Info";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
