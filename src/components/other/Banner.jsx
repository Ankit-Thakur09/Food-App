// import React from 'react'

import { useEffect, useState } from "react";





const Banner = () => {
  
        const slides = [
          {
            heading1: "Buy 1 Get 1 Free",
            heading2: "Double the Treats, Half the Price - Buy 1 Get 1 Free",
            span: "Every Wednesday!",
            Img_Src: "./banner.webp",
            bg: "bg-gradient-to-b from-[#f8ebeb] via-[#fcf0f0] to-[#f8ebeb]",
          },
          {
            heading1: "Flat 20% Off",
            heading2:
              "Apply the promo code FIRST20 at checkout to avail the discount on",
            span: "First Order",
            Img_Src: "./food2.webp",
            bg: "bg-[#ffffff]",
          },
          {
            heading1: "Flavors of India",
            heading2: "Explore the Flavors of India in ",
            span: "Every Bite!",
            Img_Src: "./food5.webp",
            bg: "bg-[#ffffff]",
          },

          {
            heading1: "Weekend Feast Combo",
            heading2: "Enjoy curated meal combos for two at just ₹100,",
            span: "Every Saturday and Sunday!",
            Img_Src: "./food4.webp",
            bg: "bg-[#ffffff]",
          },
        ];
      
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }, 10000); 
      
          return () => clearInterval(interval);
        }, [slides.length]);
      
  return (
    <>
      <div className="bg-[#FF6347] border-[#FF6347] w-[80%] h-[50vw]  md:h-[25vw] border rounded-[2rem] rounded-br-2xl md:rounded-[2.5rem] md:rounded-br-3xl  overflow-hidden mx-auto my-5">
        <div
          className={ `w-[98%] h-[95%] md:h-[94%]] ${slides[currentIndex].bg} overflow-hidden rounded-3xl rounded-br-xl md:rounded-br-2xl flex items-center justify-center
         flex-col
        md:gap-[2vw] md:flex-row 
        `}
        >
          <div className=" flex justify-center  md:items-start items-center flex-col">
            <div
              className="text-[5vw] md:px-3 py-1 leading-[6.5vw] md:text-[2.5vw] md:leading-[3vw] font-semibold 
            "
            >
              {slides[currentIndex].heading1}
            </div>
            <p
              className="text-[3vw] pr-[4vw] 
            md:text-[1.4vw] px-3 md:pr-[2vw]"
            >
              {slides[currentIndex].heading2}
              <span className="font-bold px-1 md:text-[2vw] text-[5vw] text-red-500 italic">
                {slides[currentIndex].span}
              </span>
            </p>
          </div>
          <div className="w-[50%] md:w-[30%] h-[98%] overflow-hidden flex justify-center md:justify-end">
            <img
              src={slides[currentIndex].Img_Src}
              alt="img"
              className="overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
