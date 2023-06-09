import React from "react";
import carretRight from "../../assets/images/Caret-Right.svg";

const BreadCrumbs = ({ name, subName}) => {
  return (
    <div className="flex mt-4">
      <span className="text-[16px]">{name}</span>
      <img src={carretRight} alt="damage img" width={30} />
      <span className="text-[16px]">{subName}</span>
    </div>
  );
};

export default BreadCrumbs;
