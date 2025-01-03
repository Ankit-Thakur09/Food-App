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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6 p-6">
        {topDish.map((dish) => (
          <div
            key={dish.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
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
}

export { TopDishes };
