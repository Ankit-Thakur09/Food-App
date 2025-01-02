import  { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Btn from "../Button/Btn";
// import Link from "next/link";

const MainComponent = () => {
  const data = {
    items: [
      {
        heading1: "E-Commerce App Development Services",
        heading2:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Addolore, aliquam eum repudiandae ut repellat inventore nulla temporibus vero fuga!",
        Img_Src: "/bb/images/hero-img.png",
      },
      {
        heading1: "Custom Web Solutions",
        heading2:
          "Consectetur adipiscing elit. Phasellus euismod lacus et massa ultrices, vitae varius tortor tincidunt.",
        Img_Src: "/bb/images/realEstate.png",
      },
      {
        heading1: "Mobile App Development",
        heading2:
          "Suspendisse potenti. Integer nec libero eu nulla interdum dignissim eget id sapien.",
        Img_Src: "/bb/images/finance.png",
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.items.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [data.items.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.items.length);
  };

  return (
    <>
      <div className="px-12 h-screen w-full p-4 relative">
        {/* Carousel Container */}
        <div className="relative text-center md:text-left h-full flex justify-center items-center space-y-4">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row absolute transition-opacity duration-1000 ease-in-out w-full h-full ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Content Section */}
              <div className="w-full flex flex-col justify-center px-4 mb-4 md:mb-0">
                <h1 className="text-[6vw] sm:text-[4vh] md:text-[3vw] font-bold mb-4">
                  {item.heading1}
                </h1>
                <p className="text-[4vw] sm:text-[3vw] md:text-[1.5vw] text-gray-700">
                  {item.heading2}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full flex justify-center">
                <img
                  src={item.Img_Src}
                  alt=""
                  className="w-[90%] md:w-auto max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Buttons */}
        <div className="absolute top-1/3 md:top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2">
          <button
            onClick={handlePrev}
            className=" text-black p-3 text-3xl  md:h-14 md:w-14 h-10 w-10 "
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className=" text-black p-3 text-3xl   md:h-14 md:w-14 h-10 w-10"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
