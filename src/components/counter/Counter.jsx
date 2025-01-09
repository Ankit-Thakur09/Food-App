import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCard,
  addedToCart,
} from "../../feature/CounterThis";
import { useEffect } from "react";

function Counter({ dishId, dishName, dishPrice, dishImg }) {
  const dispatch = useDispatch();

  // Safely initialize counter value for the dishId
  const counter = useSelector((state) => state.counter.counters[dishId] || 0);
  const selectedCard = useSelector((state) => state.counter.selectedCard);

  const handleOnClick = () => {
    // Ensure the counter value is at least 1 before selecting the card
    if (counter === 0) {
      dispatch(increment(dishId)); // Increment counter if it's 0
    }
    // Set this card as selected
    dispatch(selectCard(dishId));
    dispatch(
      addedToCart({
        text: dishName,
        price: dishPrice,
        quantity: 1,
        img: dishImg,
      })
    );
  };

  const handleIncrement = () => {
    // Increment the counter for this dish

    if (counter < 10) {
      dispatch(increment(dishId));
      dispatch(
        addedToCart({
          text: dishName,
          price: dishPrice,
          quantity: counter + 1, // Increment the quantity
        })
      );
    }
    // Update the cart with the new quantity
  };

  const handleDecrement = () => {
    if (counter > 0) {
      dispatch(decrement(dishId));

      // Update the cart with the new quantity
      dispatch(
        addedToCart({
          text: dishName,
          price: dishPrice,
          quantity: counter - 1, // Decrement the quantity
        })
      );
    }
  };

  useEffect(() => {
    // If the counter is 0 after decrementing, deselect the card
    if (counter === 0) {
      dispatch(selectCard(null));
    }
  }, [counter, dispatch]);

  return (
    <div className="h-10">
      <div
        className={`text-3xl cursor-pointer h-10 w-10 rounded-full text-center left-10 bg-white ${
          selectedCard === dishId || counter > 0 ? "hidden" : ""
        }`}
        onClick={handleOnClick}
      >
        +
      </div>
      <div
        className={`flex h-10 w-24 border-2 items-center justify-center rounded-full bg-white ${
          selectedCard === dishId || counter > 0 ? "" : "hidden"
        }`}
      >
        <div
          className="bg-red-300 pb-1 h-7 w-7 rounded-full text-2xl font-bold flex items-center justify-center cursor-pointer text-red-700"
          onClick={handleDecrement}
        >
          -
        </div>
        <span className="text-xl px-2">{counter}</span>
        <div
          className="bg-green-300 pb-1 h-7 w-7 rounded-full text-2xl font-bold flex items-center justify-center cursor-pointer text-green-700"
          onClick={handleIncrement}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default Counter;
