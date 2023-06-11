import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import LandingPage from "../features/main/LandingPage";
import PlantsViewPage from "../features/plants/PlantsViewPage";
import Products from "../features/products/Products";
import "aos/dist/aos.css";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:id" element={<LandingPage />}></Route>
      <Route path="/plants-view/:id" element={<PlantsViewPage />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </RouterRoutes>
  );
};

export default Routes;
