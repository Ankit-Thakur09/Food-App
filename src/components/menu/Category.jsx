// import React from "react";
import PropTypes from "prop-types";

function Category({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="grid grid-flow-col overflow-x-auto gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
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
  );
}
Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  onCategorySelect: PropTypes.func.isRequired,
};

export default Category;
