// import React from 'react'

function TopDishes({menuData}) {
  return (
    <>
      <div id="output" className="mt-4 p-4 border rounded bg-gray-100">
        {Array.isArray(menuData) ? (
          // If buttonData is an array, show the data for all buttons
          menuData.map((btn) => (
            <div key={btn.id} className="mb-4">
              <h2 className="font-bold">{btn.title}</h2>
             
            </div>
          ))
        ) : (
          // If buttonData is a single button, display that button's data
          <div>
            <h2 className="font-bold">{menuData.title} </h2>
            
          </div>
        )}
      </div>
    </>
  );
};

export default TopDishes