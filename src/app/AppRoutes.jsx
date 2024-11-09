import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes/AuthRoutes";
import { ExchangeRoutes } from "./ExchangeRoutes/ExchangeRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthRoutes />} path="/*" />
      <Route element={<ExchangeRoutes />} path="/exchange/*" />
    </Routes>
  );
};
