
import Banner from "../other/Banner";



import MenuPage from "../menu/MenuPage";
import TopSection from "./TopSection";



function Home() {


  return (
    <>
      <TopSection />
      <Banner />
     
      <MenuPage isHidden={false} />


    </>
  );
}

export default Home;
