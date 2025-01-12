import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";


import {
  increment,
  decrement,
  selectCard,
  addedToCart,
  deleteItem,
} from "../../feature/CounterThis";
import { useEffect } from "react";

function Counter({ dishId, dishName, dishPrice, dishImg, noPlusBtn = false, deleteBtn=false }) {
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
    console.log(dishId);

    dispatch(
      addedToCart({
        text: dishName,
        price: dishPrice,
        quantity: 1,
        img: dishImg,
        dishId: dishId,
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
   const handleReset = () => {
     if (counter > 0) {
       dispatch(deleteItem(dishId )); // Reset counter to 0
       dispatch(
         addedToCart({
           text: dishName,
           price: dishPrice,
           quantity: 0, // Reset the quantity in the cart
         })
       );
       dispatch(selectCard(null)); // Deselect the card if counter is reset
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
        }  ${noPlusBtn ? "hidden" : ""}`}
        onClick={handleOnClick}
      >
        <FiPlus />
      </div>
      <div
        className={`flex h-10 w-24 border-2 items-center justify-center rounded-full bg-white ${
          selectedCard === dishId || counter > 0 || noPlusBtn
            ? "border-none"
            : "hidden"
        }  `}
      >
        <div
          className={`${
            noPlusBtn
              ? "bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              : "bg-red-300 text-lg h-7 w-7 rounded-full  font-bold flex items-center justify-center  text-red-700 "
          }cursor-pointer `}
          onClick={handleDecrement}
        >
          <FiMinus />
        </div>
        <span className={`${noPlusBtn ? "text-sm px-2" : "text-xl px-2"} `}>
          {counter}
        </span>
        <div
          className={`${
            noPlusBtn
              ? "bg-gray-200 text-gray-700 px-3 py-1 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm "
              : "bg-green-300  h-7 w-7 rounded-full text-lg font-bold flex items-center justify-center  text-green-700"
          } cursor-pointer `}
          onClick={handleIncrement}
        >
          <FiPlus />
        </div>
        <button
          className={`mt-2 p-2 text-sm text-red-500 font-semibold focus:outline-none hover:text-red-700 ${
            deleteBtn ? "" : "hidden"
          }`}
          onClick={handleReset}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Counter;
