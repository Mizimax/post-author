import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsPage from "../pages/Posts.tsx";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
