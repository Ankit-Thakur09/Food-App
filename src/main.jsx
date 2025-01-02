import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css"
import App from "./App.jsx";
// import StoreContextProvider from "./components/context/StoreContext.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StoreContextProvider> */}
   
    {/* </StoreContextProvider> */}
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
