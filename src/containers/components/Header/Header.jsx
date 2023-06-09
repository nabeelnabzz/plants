import React from "react";
import bag from "../../../assets/images/bag.svg";
import heart from "../../../assets/images/heart.svg";
import person from "../../../assets/images/person.svg";
import search from "../../../assets/images/search.svg";
import bagWhite from "../../../assets/images/bag-white.svg";
import heartWhite from "../../../assets/images/heart-white.svg";
import personWhite from "../../../assets/images/peaple-white.svg";
import searchWhite from "../../../assets/images/search-white.svg";

const Header = ({ color }) => {
  return (
    <nav className={`grid grid-cols-12 gap-5 items-center ${color}`}>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
        <h2 className="text-[40px]">Terra Blooms</h2>
      </div>
      <ul className="flex justify-center items-center flex-wrap col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 gap-8">
        <li className="text-[16px]">Terrarium</li>
        <li className="text-[16px]">Plants</li>
        <li className="text-[16px]">Natural Aquarium</li>
        <li className="text-[16px]">Customize</li>
        <li className="text-[16px]">Blog</li>
        <li className="text-[16px]">About Us</li>
      </ul>
      <div className="flex justify-end gap-3 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
        <img src={color ? bagWhite : bag} alt="damage img" width={20} />
        <img src={color ? heartWhite : heart} alt="damage img" width={20} />
        <img src={color ? personWhite : person} alt="damage img" width={20} />
        <img src={color ? searchWhite : search} alt="damage img" width={20} />
      </div>
    </nav>
  );
};

export default Header;
