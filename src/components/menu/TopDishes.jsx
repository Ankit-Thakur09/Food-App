import Counter from "../counter/Counter";


function TopDishes({ topDish }) {
  if (!topDish.length) {
    return <p>No top-rated dishes found.</p>;
  }
  return (
    <>
      <div className="p-6">
        <div className="text-2xl font-bold">Explore Our Top Dishes</div>
        <div className="font-semibold">
          Savor the Best of Culinary Excellence with Our Handpicked Top Dishes,
          Crafted to Delight Every Palate!
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 p-6 place-items-center">
        {topDish.map((dish) => (
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
              <div
              // className={`absolute top-2 left-2 inline-block h-4 w-4 rounded-full ${
              //   dish.isVeg ? "bg-green-500" : "bg-red-500"
              // } border-2 border-white shadow-md`}
              // title={dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}
              >
                {" "}
                vegs
              </div>
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                ⭐ {dish.rating.toFixed(1)}
              </div>
            </div>

            {/* Content Section */}

            <div className="p-4">
              <div className="flex items-center mb-2">
                <span
                // className={`inline-block h-3 w-3 rounded-full mr-2 ${
                //   dish.isVeg ? "bg-green-500" : "bg-red-500"
                // }`}
                ></span>
                <p className="text-sm text-gray-600">
                  {/* {dish.isVeg ? "Vegetarian" : "Non-Vegetarian"} */} veg/non
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
    </>
  );
}

export { TopDishes };
