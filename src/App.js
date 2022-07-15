import React from "react";
import { ComingSoon, About, Blog, Github } from "./components";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
