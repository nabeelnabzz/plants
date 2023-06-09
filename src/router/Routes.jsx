import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import LandingPage from "../features/main/LandingPage";
import PlantsViewPage from "../features/plants/PlantsViewPage";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/plants-view" element={<PlantsViewPage />}></Route>
    </RouterRoutes>
  );
};

export default Routes;
