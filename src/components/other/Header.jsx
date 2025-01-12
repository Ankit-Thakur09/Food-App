import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
 

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartNum, setCartNum] = useState(true);

  const navBartoggle = () => {
    setIsOpen(!isOpen);
  };
  const cart = useSelector((state) => state.counter.totalQuantity);
  useEffect(() => {
     if (cart ==0) {
       setCartNum(false);
    }
     if (cart >0) {
       setCartNum(true);
     }
  }, [cart])
  
 
  return (
    <>
      <div className="flex justify-between font-semibold bg-slate-200 text-white md:items-center p-2 fixed z-40 opacity-80 w-full">
        <div className="flex text-red-500 md:text-lg font-bold">MyApp</div>
        <div>
          <nav className="text-right font-semibold md:text-lg  text-black">
            <button onClick={navBartoggle} className="py-1 px-3 md:hidden ">
              {isOpen ? <RxCross2 /> : <FaBars />}
            </button>
            <div
              className={`flex flex-col  ${
                isOpen ? "" : "hidden"
              } md:flex md:flex-row md:justify-end  `}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `p-2 m-1  ${isActive ? " font-bold text-orange-400" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `p-2 m-1  ${isActive ? "font-bold text-orange-400" : ""}`
                }
              >
                Menu
              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `p-2 m-1  ${isActive ? " font-bold text-orange-400" : ""}`
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `p-2 m-1  ${isActive ? " font-bold text-orange-400" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `md:py-2 md:my-1.5  ${
                    isActive ? " font-bold text-orange-400" : ""
                  } flex justify-center `
                }
              >
                <TiShoppingCart className="text-2xl md:mx-auto" />
                <span className={`text-orange-400 text-xl font-bold ${cartNum?"":"hidden"}`}>
                  <sup>{cart}</sup>
                </span>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
