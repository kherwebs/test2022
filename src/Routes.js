import React from "react";
import Launcher from "pages/Launcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/launcher" element={<Launcher />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
