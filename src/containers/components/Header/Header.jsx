import React from "react";
import bag from "../../../assets/images/bag.svg";
import heart from "../../../assets/images/heart.svg";
import person from "../../../assets/images/person.svg";
import search from "../../../assets/images/search.svg";
import bagWhite from "../../../assets/images/bag-white.svg";
import heartWhite from "../../../assets/images/heart-white.svg";
import personWhite from "../../../assets/images/peaple-white.svg";
import searchWhite from "../../../assets/images/search-white.svg";
import { Link } from "react-router-dom";

const Header = ({ color, menuOpen, handleMenuToggle }) => {
  return (
    <nav className={`grid grid-cols-12 gap-5 items-center ${color}`}>
      <div className="flex gap-3 col-span-4 sm:col-span-5 md:col-span-6 lg:col-span-3 md:hidden !sm:flex mt-4">
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer"
          onClick={handleMenuToggle}
        >
          <svg
            className={color ? "w-6 h-6 text-white" : "w-6 h-6 text-black"}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"
            ></path>
          </svg>
        </label>
        {menuOpen && (
          <ul className="flex flex-col" id="menu-items">
            <li className="text-[16px]">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-[16px]">
              <Link to="/plants-view">Plants</Link>
            </li>
            <li className="text-[16px]">
              <Link to="/naturalAquarium">Natural Aquarium</Link>
            </li>
            <li className="text-[16px]">
              <Link to="/customize">Customize</Link>
            </li>
            <li className="text-[16px]">
              <Link to="/ourWork">Blog</Link>
            </li>
            <li className="text-[16px]">
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        )}
      </div>
      {!menuOpen ? (
        <div className="flex justify-between col-span-8 sm:col-span-6 md:col-span-6 lg:col-span-3">
          <h2 className="text-[20px] md:text-[40px] lg:text-[40px]">
            <Link to="/">Terra Blooms</Link>
          </h2>
        </div>
      ) : (
        ""
      )}

      <ul className="hidden justify-center items-center flex-wrap col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 gap-8 sm:hidden md:flex lg:flex">
        <li className="text-[16px]">
          <Link to="/products">Products</Link>
        </li>
        <li className="text-[16px]">
          <Link to="/plants-view">Plants</Link>
        </li>
        <li className="text-[16px]">
          <Link to="/naturalAquarium">Natural Aquarium</Link>
        </li>
        <li className="text-[16px]">
          <Link to="/customize">Customize</Link>
        </li>
        <li className="text-[16px]">
          <Link to="/ourWork">Blog</Link>
        </li>

        <li className="text-[16px]">
          <Link to="/aboutUs">About Us</Link>
        </li>
      </ul>
      {!menuOpen ? (
        <div className="flex justify-end gap-6 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
          <img
            className="cursor-pointer"
            src={color ? bagWhite : bag}
            alt="damage img"
            width={20}
          />
          <img
            className="cursor-pointer"
            src={color ? heartWhite : heart}
            alt="damage img"
            width={20}
          />
          <img
            className="cursor-pointer"
            src={color ? personWhite : person}
            alt="damage img"
            width={20}
          />
          <img
            className="cursor-pointer"
            src={color ? searchWhite : search}
            alt="damage img"
            width={20}
          />
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
