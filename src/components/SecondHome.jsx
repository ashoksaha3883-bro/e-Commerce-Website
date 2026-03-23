import React from "react";

const SecondHome = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-stone-100">
        <hr className="my-2 text-blue-500" />

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 p-2 text-sm sm:text-base">
          <h2>🔛 Days Easy</h2>
          <h2>💷 Cash on Delivery</h2>
          <h2>🗄️ Lowest Prices</h2>
        </div>

        <hr className="my-2 text-blue-500" />
      </div>

      {/* Images Section */}
      <div className="hidden md:flex gap-4 w-full p-4">

        {/* Left Image */}
        <div className="w-1/2 bg-pink-300 overflow-hidden rounded-lg">
          <img
            src="/images/HomeImage/banner3.jpg"
            alt="home"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="w-1/2 bg-amber-500 overflow-hidden rounded-lg">
          <img
            src="/images/HomeImage/HomePage.webp"
            alt="home"
            className="w-full h-[420px] object-cover"
          />
        </div>

      </div>
    </>
  );
};

export default SecondHome;