import React from "react";
import carretRight from "../../assets/images/Caret-Right.svg";

const BreadCrumbs = ({ name, subName, color }) => {
  return (
    <div className={color ? "flex mt-4 absolute" : "flex mt-4"}>
      <span
        className={color ? "text-[16px] text-white text-center" : "text-[16px]"}
      >
        {name}
      </span>
      <img src={carretRight} alt="damage img" width={30} />
      <span
        className={color ? "text-[16px] text-white text-center" : "text-[16px]"}
      >
        {subName}
      </span>
    </div>
  );
};

export default BreadCrumbs;
