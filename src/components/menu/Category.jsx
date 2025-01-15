// import React from "react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
// import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { LuStepBack, LuStepForward } from "react-icons/lu";



function Category({ categories, selectedCategory, onCategorySelect }) {
  const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollAmount = 150;

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      updateScrollButtons(); // Initial update
      scrollContainer.addEventListener("scroll", updateScrollButtons);

      return () => {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);
  return (
    <div className="flex items-center gap-2  bg-gray-100 rounded-lg  shadow-md p-4">
      <div
        className={`${
          canScrollLeft
            ? "border-gray-300 bg-white p-2 text-2xl shadow-md rounded-lg cursor-pointer hover:bg-orange-300"
            : "hidden"
        }`}
        onClick={() => handleScroll("prev")}
        disabled={!canScrollLeft}
      >
        <LuStepBack />
      </div>

      <div
        ref={scrollContainerRef}
        className="grid grid-flow-col overflow-x-hidden gap-4   "
      >
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
            selectedCategory === null
              ? "bg-blue-500 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-300"
          }`}
        >
          All Categories
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              onCategorySelect(selectedCategory === category ? null : category);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className={`${
          canScrollRight
            ? "border-gray-300 bg-white p-2 text-2xl shadow-md rounded-lg cursor-pointer hover:bg-orange-300"
            : "hidden"
        }`}
        onClick={() => handleScroll("next")}
        disabled={!canScrollRight}
      >
        <LuStepForward />
      </div>
    </div>
  );
}
Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  onCategorySelect: PropTypes.func.isRequired,
};

export default Category;
