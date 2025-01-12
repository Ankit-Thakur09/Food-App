// import React from 'react'

import { useState, useEffect } from "react";
// import dishesData from "./data/menuData/foodWebData.json";
import MenuCard from "./MenuCard";

import Category from "./Category";

import { TopDishes } from "./TopDishes";
import Loader from "../other/Loader";
// import Counter from "../counter/Counter";

function MenuPage({isHidden=true}) {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [topDishes, setTopDishes] = useState([]);
  // const [filterCriteria, setFilterCriteria] = useState(4.5);
  // const[topDishes, setTopDishes]=useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/data/menuData/foodWebData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const allDishes = data.categories.flatMap((category) =>
          category.items.map((item) => ({
            ...item,
            category: category.name, // Add category name to each dish
          }))
        );
        setDishes(allDishes);
        setCategories(data.categories.map((category) => category.name)); // Extract category names
     
        const initialFilter = data.categories.flatMap(
          (category) => category.items.filter((dish) => dish.rating > 4.2) // Correctly accessing dish.rating
        );

        // console.log("Filtered",initialFilter);
        setTopDishes(initialFilter);

        // console.log(topDishes);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
      })

      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [topDishes]);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      
      <div className={`${isHidden ? "" : "hidden"}`}>
        <Category
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <MenuCard dishes={dishes} selectedCategory={selectedCategory} />
      </div>

      <div className={`${isHidden ? "hidden" : ""}`}>
        <TopDishes topDish={topDishes} />
      </div>
    </>
  );
}



 export default MenuPage;
