import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Conditon = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, img: "/images/All/Women2.jpg", label: "Scat", type: "cold" },
    { id: 2, img: "/images/All/Men2.jpg", label: "Shirt", type: "hot" },
    { id: 3, img: "/images/All/Men5.jpg", label: "Formal", type: "cold" },
    { id: 4, img: "/images/All/Women.jpg", label: "Sheath Ribbed", type: "hot" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? items : items.filter((i) => i.type === filter);

  const handleCategoryClick = (label) => {
    if (label === "Scat") navigate("/kids");
    if (label === "Shirt") navigate("/brand");
    if (label === "Formal") navigate("/men");
    if (label === "Sheath Ribbed") navigate("/women");
  };

  return (
   <div className="w-full mt-4 px-4 sm:px-6 md:px-8 py-5">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
    Browse by Categories
  </h2>

  {/* Buttons */}
  <div className="flex  justify-end md:justify-end flex-wrap gap-2 mb-4">
    <button
      onClick={() => setFilter("all")}
      className={`font-semibold px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base ${
        filter === "all"
          ? "bg-black text-white"
          : "border-2 border-black hover:bg-black hover:text-white"
      }`}
    >
      All
    </button>

    <button
      onClick={() => setFilter("cold")}
      className={`font-semibold px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base ${
        filter === "cold"
          ? "bg-black text-white"
          : "border-2 border-black hover:bg-black hover:text-white"
      }`}
    >
      Cold
    </button>

    <button
      onClick={() => setFilter("hot")}
      className={`font-semibold px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base ${
        filter === "hot"
          ? "bg-black text-white"
          : "border-2 border-black hover:bg-black hover:text-white"
      }`}
    >
      Hot
    </button>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    {filteredItems.map((item) => (
      <div
        key={item.id}
        onClick={() => handleCategoryClick(item.label)}
        className="rounded-3xl overflow-hidden relative cursor-pointer"
      >
        <img
          src={item.img}
          alt={item.label}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
        />

        <span className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          {item.label}
        </span>
      </div>
    ))}
  </div>
</div>
  );
};

export default Conditon;