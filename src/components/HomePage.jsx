import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginFrom";
import SecondHome from "./SecondHome";
import Conditon from "./Conditon";
import TopDeal from "./TopDeal";
import Choose from "../components/Choose";
import Testimonial from "./Testimonial";

const images = [
  "/images/Home/HomeImage7.webp",
  "/images/Home/HomeImage9.jpg",
  "/images/Home/HomeImage3.jpg",
  "/images/Home/HomeImage2.jpg",
  "/images/Home/HomeImage4.jpg",
  "/images/Home/HomeImage6.webp",
];

const HomePage = ({ showLogin }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="w-full overflow-hidden relative">

        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="slider"
              className="
                w-full 
                h-[220px] 
                sm:h-[320px] 
                md:h-[400px] 
                lg:h-[500px] 
                xl:h-[550px] 
                object-cover 
                flex-shrink-0
              "
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                rounded-full 
                transition-all 
                ${index === currentIndex ? "bg-white" : "bg-white/50"}
                w-3 h-3 
                md:w-4 md:h-4
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Login Form */}
        {showLogin && (
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <LoginForm />
          </div>
        )}
      </div>

      {/* Other Sections */}
      <SecondHome />
      <Conditon />
      <TopDeal />
      <Choose />
      <Testimonial />
    </>
  );
};

export default HomePage;