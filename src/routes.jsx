import React from "react";
import { Route, Routes } from "react-router-dom";

import RepositoriesPage from "./pages/RepositoriesPage";
import MainPage from "./pages/MainPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:login/repositories" element={<RepositoriesPage />}/>
    </Routes>
  );
}
