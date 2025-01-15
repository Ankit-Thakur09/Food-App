// import React from "react";

import PropTypes from "prop-types";
import Counter from "../counter/Counter";
import { useState } from "react";


const MenuCard = ({ dishes, selectedCategory  }) => {
   const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 12; // Items to display per page
  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : dishes;
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredDishes.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredDishes.length / itemsPerPage);

  const getPageNumbers = (currentPage, totalPages) => {
    const pages = [];
    const maxVisiblePages = 3; // Number of pages to show around the current page

    // Always show the first page
    if (currentPage >= 1) pages.push(1);
    

    // Show dots before the current page if it's beyond the initial range
    if (currentPage > maxVisiblePages) pages.push("...");

    // Show pages around the current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

   if (currentPage <= totalPages - maxVisiblePages && totalPages > 1) {
     pages.push("...");
   }

   // Always show the last page if there are multiple pages
   if (totalPages > 1 && currentPage <= totalPages) {
     pages.push(totalPages);
   }

    return pages;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6 place-items-center">
        {paginatedData.map((dish) => (
          <div
            key={dish.id}
            className="bg-white shadow-xl rounded-lg max-w-[300px] overflow-hidden border border-gray-300 hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={dish.imgSrc}
                alt="Dish"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                ⭐ {dish.rating.toFixed(1)}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span
                  className={`inline-block h-3 w-3 rounded-full mr-2 ${
                    dish.isVeg ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <p className="text-sm text-gray-600">
                  {dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                </p>
              </div>

              <h2 className="text-lg font-bold text-gray-900 truncate">
                {dish.name}
              </h2>
              <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                {dish.description}
              </p>

              {/* Price and Counter Section */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-800 font-semibold">
                  ₹{dish.price}
                  <span className="text-sm font-medium text-gray-500">
                    {" "}
                    / item
                  </span>
                </p>
                <div>
                  <Counter
                    dishId={dish.id}
                    dishName={dish.name}
                    dishPrice={dish.price}
                    dishImg={dish.imgSrc}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
        <div className="flex sm:hidden justify-center items-center my-6 space-x-4">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300 ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Previous
          </button>

          {/* Page Info */}
          <span className="text-lg font-bold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300 ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Next
          </button>
       
      </div>
      <div className="hidden sm:flex justify-center items-center my-6 space-x-2">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-lg font-semibold  transition-colors duration-300 ${
            currentPage === 1
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          Previous
        </button>

        {/* Dynamic Page Numbers */}
        {getPageNumbers(currentPage, totalPages).map((page, index) => (
          <button
            key={index}
            onClick={() => page !== "..." && setCurrentPage(page)}
            disabled={page === "..."}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              page === currentPage
                ? "bg-red-500 hover:bg-red-600 text-white"
                : page === "..."
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-lg font-semibold  transition-colors duration-300 ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          Next
        </button>
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
