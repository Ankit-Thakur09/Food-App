import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function AppLayout() {
  return (
    <>
      <div className="flex flex-col h-screen  justify-between">
        <Header />
        <div className=" mt-10 md:mt-[4.2rem]">
          <Outlet />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
