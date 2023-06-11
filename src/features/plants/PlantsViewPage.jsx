import React, { useState } from "react";
import Header from "../../containers/components/Header/Header";
import BreadCrumbs from "../../containers/components/BreadCrumbs";
import PalntsViewTail from "./components/PalntsViewTail";
import Footer from "../../containers/components/Footer/Footer";

const PlantsViewPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="w-[85%] mx-auto">
        <Header menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />
        <BreadCrumbs name="Home" subName="Products" />
        <PalntsViewTail />
      </div>
      <Footer />
    </>
  );
};

export default PlantsViewPage;
