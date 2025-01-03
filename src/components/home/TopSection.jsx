// import React from 'react'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function TopSection() {
  const slides = [
    { src: "/slide/image1.jpg" },
    { src: "/slide/image2.jpg" },
    { src: "/slide/image3.jpg" },
    { src: "/slide/image4.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className=" relative  w-full h-screen overflow-hidden">
      <div className=" relative w-full h-full">
        <img
          src={slides[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4  ">
          <div className="text-center text-xl md:text-3xl font-bold">
            Order your favourite food here
          </div>
          <div className="text-center text-md md:text-lg font-semibold">
            Food that warms your soul and fills your heart
          </div>
          <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-orange-600 text-white rounded font-bold">
            <NavLink
              to="/menu"
            >
              View Menu
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopSection