// import React from 'react'

function HeroSection() {
  return (
    <>
      <div className="h-screen overflow-hidden relative">
        <div className="slider h-screen overflow-hidden">
          <img src="/slide/image1.jpg " alt="1" />
        </div>
        <div className="slider1 h-screen overflow-hidden w-full">
          <img src="/slide/image2.jpg" alt="2" />
        </div>
        <div className="slider2 h-screen overflow-hidden w-full ">
          {" "}
          <img src="/slide/image3.jpg" alt="3" />
        </div>
        <div className="slider3 h-screen overflow-hidden w-full">
          <img src="/slide/image4.jpg" alt="4" className="h-full w-full" />
        </div>
        <div className="slider4 h-screen overflow-hidden w-full">
          <img
            src="https://images.pexels.com/photos/2422255/pexels-photo-2422255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="4"
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
