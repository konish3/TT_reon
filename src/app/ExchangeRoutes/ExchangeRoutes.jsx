import React from "react";
import { Routes, Route } from "react-router-dom";
import { FeedPage } from "../../pages/FeedPage/FeedPage";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { ProjectPageContainer } from "../../pages/ProjectPage/ProjectPageContainer";

// Изменить пути на константы

export const ExchangeRoutes = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route element={<FeedPage />} path="/feed" />
          <Route element={<ProfilePage />} path="/profile" />
          <Route
            element={<ProjectPageContainer />}
            path="/project/:projectId"
          />
        </Routes>
      </div>
    </div>
  );
};
