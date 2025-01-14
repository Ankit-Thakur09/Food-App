import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, setTotals } from "../../feature/CounterThis";
import { NavLink, useNavigate } from "react-router-dom";
import Counter from "../counter/Counter";

function Cart() {
  // Get the cart items from Redux state
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState(false);

  const cart = useSelector((state) => state.counter.cart);

  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.counter.totalQuantity);
  const totalPrice = useSelector((state) => state.counter.totalPrice);

  const navigate = useNavigate();

  const handleProceed = () => {
    if (cart.length === 0) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    } else {
      setMessage(true);
      setTimeout(() => {
        setMessage(false); // Clear the message before navigating
        navigate("/checkout");
      }, 2000);
    }
  };

  useEffect(() => {
    dispatch(setTotals({ totalQuantity, totalPrice }));
  }, [dispatch, totalQuantity, totalPrice]);

  const handleClear = () => {
    dispatch(deleteAll());
  };
  // const handleDelete = (item) => {
  //   dispatch(deleteCard(item.text));

  //   dispatch(selectCard(null));
  // };

  return (
    <div>
      <div
        className={` text-center pt-5 font-bold  ${
          errorMessage ? "text-red-400" : message ? "text-green-400" : "hidden"
        }`}
      >
        {errorMessage
          ? "Your Cart is empty. Add some items first."
          : message
          ? "Please wait, your items are proceeding for Checkout..."
          : ""}
      </div>
      <div className="flex flex-col-reverse md:flex-row py-5 px-4 gap-6">
        <div className="w-full md:w-2/3 border border-gray-200 rounded-lg bg-gray-50 shadow-lg">
          <div className="h-[39vh] md:h-[55vh] overflow-y-auto ">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col  font-semibold text-lg text-gray-500 relative">
                <div className=" h-full w-full overflow-hidden flex opacity-40">
                  <div className="w-1/3  ">
                    <div className="flex p-5 justify-center w-full">
                      <img
                        src="./f1.webp"
                        className="w-10 md:w-20 rotate-[20deg]"
                        alt=""
                      />
                    </div>

                    <div className="flex p-3 justify-between w-full">
                      <img
                        src="./f2.webp"
                        className="w-[10vw] md:w-20 -rotate-[30deg]"
                        alt=""
                      />
                      <img
                        src="./f4.webp"
                        alt=""
                        className="w-10 md:w-20 rotate-[35deg]"
                      />
                    </div>
                    <div className="flex justify-center p-5 ml-8 w-full">
                      <img
                        src="./f3.webp"
                        className="w-10 md:w-20 rotate-45"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col justify-evenly  ">
                    <div className="flex p-3 justify-between w-full">
                      <img
                        src="./f5.webp"
                        className="w-[10vw] md:w-20 -rotate-[30deg]"
                        alt=""
                      />
                      <img
                        src="./f6.webp"
                        alt=""
                        className="w-10 md:w-20 rotate-[35deg]"
                      />
                    </div>

                    <div className="flex p-3 justify-between w-full">
                      <img
                        src="./f7.webp"
                        className="w-[10vw] md:w-20 -rotate-[30deg]"
                        alt=""
                      />
                      <img
                        src="./f10.webp"
                        alt=""
                        className="w-10 md:w-20 rotate-[35deg]"
                      />
                    </div>
                  </div>
                  <div className="w-1/3  ">
                    <div className="flex p-5 justify-center w-full">
                      <img
                        src="./f9.webp"
                        className="w-10 md:w-20 rotate-[20deg]"
                        alt=""
                      />
                    </div>

                    <div className="flex p-3 justify-between w-full">
                      <img
                        src="./f5.webp"
                        className="w-[10vw] md:w-20 -rotate-[30deg]"
                        alt=""
                      />
                      <img
                        src="./f8.webp"
                        alt=""
                        className="w-10 md:w-20 rotate-[35deg]"
                      />
                    </div>
                    <div className="flex justify-center p-5 ml-8 w-full">
                      <img
                        src="./f2.webp"
                        className="w-10 md:w-20 rotate-45"
                        alt=""
                      />
                    </div>
                  </div>
                 
                </div>
                <div className="flex flex-col justify-center items-center absolute inset-0 text-gray-800 ">
                  <span>Your cart is empty.</span>
                  <span>
                    Click here to
                    <NavLink to="/menu" className="underline text-orange-400 p-2 ">
                      View Menu
                    </NavLink>
                  </span>
                </div>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4  border-b border-gray-300 items-center p-4"
                >
                  {/* Item Image and Index */}
                  <div className="w-1/3 flex items-center ">
                    <span className="text-center font-medium text-gray-500 w-6 p-1">
                      {index + 1}
                    </span>
                    <img
                      src={item.img}
                      alt="Product"
                      className="h-[100px] w-[100px] object-cover rounded-md"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="w-2/3 flex flex-col md:flex-row gap-2 p-2">
                    <div className="md:w-1/3 text-gray-800 text-base font-medium">
                      {item.text}
                    </div>
                    <div className="md:w-1/3">
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Price:</span> ₹
                        {item.price}
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Quantity:</span>{" "}
                        {item.quantity}
                      </p>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center">
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Total:</span> ₹
                        {item.total.toFixed(2)}
                      </p>
                      {/* <button
                        className="mt-2 px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded text-sm"
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </button> */}
                      <Counter
                        noPlusBtn={true}
                        dishId={item.id}
                        dishName={item.text}
                        deleteBtn={true}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Clear All Button */}
          {cart.length > 0 && (
            <div className="text-right p-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleClear}
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <div className="text-gray-800 text-lg font-semibold mb-4">
            Cart Summary
          </div>
          <p className="text-gray-600 text-sm mb-2">
            Total items: {totalQuantity}
          </p>
          <p className="text-gray-600 text-sm mb-6">
            Total Price: ₹{totalPrice}
          </p>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleProceed}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
