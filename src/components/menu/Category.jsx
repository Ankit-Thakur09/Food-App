// import React from "react";
import PropTypes from "prop-types";

function Category({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="grid grid-flow-col overflow-x-auto gap-2 ">
      <button
        onClick={() => onCategorySelect(null)}
        style={{
          backgroundColor: selectedCategory === null ? "lightblue" : "white",
        }}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            onCategorySelect(selectedCategory === category ? null : category);
          }}
          style={{
            backgroundColor:
              selectedCategory === category ? "lightblue" : "white",
          }}
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
