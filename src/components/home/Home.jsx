// import React from 'react'
// import Category from "../menu/Category";
// import { useState } from "react";
import Banner from "../other/Banner";
// import CountDown from "../other/CountDown";


import MenuPage from "../menu/MenuPage";
import TopSection from "./TopSection";
// import ExploreMenu from "./ExploreMenu";

// import { useState, useEffect } from "react";

function Home() {
//  const [topDishes,setTopDishes]=useState([])

  return (
    <>
      <TopSection />
      <Banner />
      {/* <CountDown/> */}
      <MenuPage isHidden={false} />


    </>
  );
}

export default Home;
