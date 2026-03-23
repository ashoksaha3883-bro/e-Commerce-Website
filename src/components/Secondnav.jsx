import React, { useState } from "react";
import { Link } from "react-router-dom";

const Secondnav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [newdrop, setNewdrop] = useState(false);

  return (
    <div className="max-w-8xl px-4 sm:px-10 lg:px-20 mx-auto flex items-center justify-between p-2 relative">

      <div className="flex items-center gap-2 sm:gap-4 relative">

        <button
          onClick={() => setShowDropdown(!showDropdown)}
         className="hidden md:flex items-center justify-between w-40 sm:w-48 px-4 py-2 rounded-2xl border-2 font-semibold border-blue-300"
        >
          Categories <span className="font-bold">﹀</span>
        </button>

        {showDropdown && (
          <ul className="absolute top-12 left-0 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <Link to="/men">
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                🔷 Men’s Clothing
              </li>
            </Link>

            <Link to="/women">
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                🔷 Women’s Clothing
              </li>
            </Link>

            <Link to="/kids">
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                🔷 Kids’ Clothing
              </li>
            </Link>
          </ul>
        )}

        <button
          onClick={() => setNewdrop(!newdrop)}
          className=" hidden md:flex  items-center justify-between w-40 sm:w-48 px-4 py-2  rounded-2xl border-2 font-semibold border-blue-300"
        >
          New Products <span className="font-bold">﹀</span>
        </button>

        {newdrop && (
          <ul className="absolute top-12 left-44 sm:left-52 lg:left-60 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <Link to="/summer">
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                🔶 Summer Collections
              </li>
            </Link>

            <Link to="/budget">
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                🔶 In Budget
              </li>
            </Link>
          </ul>
        )}

      </div>

      <div>
        <div className="items-center space-x-6 md:space-x-10 lg:space-x-16 mr-2 hidden sm:flex">

          <Link to="/men">
            <button className="  hover:text-blue-600 font-semibold">
              Men
            </button>
          </Link>

          <Link to="/women">
            <button className="  hover:text-blue-600 font-semibold">
              Women
            </button>
          </Link>

          <Link to="/kids">
            <button className="  hover:text-blue-600 font-semibold">
              Children
            </button>
          </Link>

          <Link to="/brand">
            <button className="  hover:text-blue-600 font-semibold">
              Brands
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Secondnav;