import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../../pages/AuthPages/Login/Login";
import { Registration } from "../../pages/AuthPages/Registration/Registration";

// Изменить пути на константы

export const AuthRoutes = () => {
  return (
    <div className="auth">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};
