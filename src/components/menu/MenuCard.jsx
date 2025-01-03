// import React from "react";

import PropTypes from "prop-types";
import Counter from "../counter/Counter";


const MenuCard = ({ dishes, selectedCategory }) => {
  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : dishes;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-6">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-[#ffffff] shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {dish.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{dish.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-800 font-bold">
                  {dish.price.toFixed(2)}
                </p>
                <p className="text-yellow-500 font-medium">
                  ⭐ {dish.rating.toFixed(1)}
                </p>
                <div>
                  <Counter
                    dishId={dish.id}
                    dishName={dish.name}
                    dishPrice={dish.price}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
MenuCard.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.string,
};
export default MenuCard;
