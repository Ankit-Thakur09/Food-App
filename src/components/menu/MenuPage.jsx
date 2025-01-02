// import React from 'react'

import { useState, useEffect } from "react";
// import dishesData from "./data/menuData/foodWebData.json";
import MenuCard from "./MenuCard";

import Category from "./Category";

import { TopDishes } from "./TopDishes";
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
        // const topDish = data.categories.items.filter((item) => item.rating > 4.5)
        // setTopDishes(topDish)
        const initialFilter = data.categories.flatMap(
          (category) => category.items.filter((dish) => dish.rating > 4.2) // Correctly accessing dish.rating
        );

        // console.log("Filtered",initialFilter);
        setTopDishes(initialFilter);
        console.log(topDishes);
        setLoading(false);
      })

      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [topDishes]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      {/* <div className=" gap-4 p-4">
        <div className="grid grid-flow-col overflow-x-auto gap-2 ">
          {buttons.map((button) => (
            <div
              key={button.id}
              onClick={() => handleClick(button.dataFile, button.id)}
              className={`px-4 py-2 hover:bg-gray-300 rounded min-w-[150px] max-w-[150px] 
              `}
            >
              <div
                className={`overflow-hidden h-28 rounded-full w-28  ${
                  activeButton === button.id
                    ? "border-4 border-rose-500  scale-105 "
                    : "border-none "
                }`}
              >
                <img
                  src={button.src}
                  alt=""
                  className="h-28 w-28 transition-all duration-300 ease-in-out  "
                />
              </div>
              <div
                className={`text-center font-bold  ${
                  activeButton === button.id ? "text-rose-500 " : "text-black "
                }`}
              >
                {" "}
                {button.label}
              </div>
            </div>
          ))}
        </div>
        <div>
          {selectedData && (
            <div className="mt-4 p-4 bg-gray-100 border rounded">
              <div className=" grid grid-cols-4 gap-2 w-[-40vw]">
                {selectedData.map((dish) => (
                  <>
                    <div key={dish.id}>
                      <div className="h-48  relative overflow-hidden rounded-s w-full  ">
                        <img
                          src={dish.img}
                          alt=""
                          className="absolute z-0  h-48 w-full"
                        />
                        <div className="z-50 right-0 relative h-full flex justify-end items-end p-2 ">
                          <Counter className="" />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>{dish.title}</div>
                        <div>{dish.price}</div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </div> */}
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
