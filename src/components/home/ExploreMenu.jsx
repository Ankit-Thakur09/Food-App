// import React from 'react'
import { useState } from "react";
function ExploreMenu({ menubtns = [], onButtonClick }) {
   const [isBtnActive, setIsBtnActive] = useState(false);
  return (
    <>
      <div className="font-semibold p-5 text-2xl">Explore our menu</div>
      <div className="px-5 py-3">
        Our menu offers a variety of delicious dishes with clear descriptions
        and pricing, catering to all tastes and dietary needs.
      </div>
      <div>
        {menubtns.map((btn) => (
          <button
            // className="p-2 m-1 cursor-pointer"
            key={btn.id}
            onClick={() => {
              onButtonClick(btn);
              setIsBtnActive((prev) => !prev);
            }}
            className={`py-2 px-10 border-b-4  cursor-pointer ${
              isBtnActive
                ? "border-b-blue-500 text-rose-400"
                : "border-b-gray-300"
            }`}
          >
            {" "}
            {btn.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default ExploreMenu;
