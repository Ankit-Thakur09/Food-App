import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/other/Layout"
import Home from "./components/home/Home";
import MenuPage from "./components/menu/MenuPage";
import ContactUs from "./components/contactus/ContactUs";
import About from "./components/other/About";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <MenuPage />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        //     {
        //       path: "/gallery",
        //       element: <GallaryLayout />, // Render GallaryLayout for /gallery
        //       children: [
        //         {
        //           path: "",
        //           element: <Room />, // Default view when /gallery is accessed
        //         },
        //         {
        //           path: "room",
        //           element: <Room />,
        //         },
        //         {
        //           path: "pool",
        //           element: <Pool />,
        //         },
        //         {
        //           path: "outside",
        //           element: <Outside />,
        //         },
        //         {
        //           path: "hall",
        //           element: <Hall />,
        //         },
        //       ],
        //     },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
