import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, setTotals, deleteCard } from "../../feature/CounterThis";
import { useNavigate } from "react-router-dom";


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
    const handleDelete = (item) => {
      dispatch(deleteCard(item.dishId));
    };

  return (
    <div>
      <div
        className={` text-center pt-5 font-bold  ${errorMessage
          ? "text-red-400"
          : message
          ? "text-green-400"
          : "hidden"}`}
      >
        {errorMessage
          ? "Your Cart is empty. Add some items first."
          : message
          ? "Please wait, your items are proceeding for Checkout..."
          : ""}
      </div>
      <div className="flex flex-col-reverse md:flex-row py-5 px-2 gap-5">
        <div className=" w-full md:w-2/3 border border-gray-300 py-4 rounded-lg bg-white shadow-xl  ">
          <div className="h-[39vh] md:h-[55vh] overflow-y-auto ">
            {cart.length === 0 ? (
              <p className="h-full justify-center flex items-center font-bold text-xl">
                Your cart is empty.
              </p>
            ) : (
              <div>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 pb-2 border border-x-0 border-t-0 border-gray-300  items-center "
                  >
                    <div className="w-1/3 flex flex-col md:flex-row">
                      <div className="h-[120px]   overflow-hidden flex items-center justify-center gap-2 ">
                        <div className="w-1/4 text-center">{index + 1}</div>
                        <img
                          src={item.img}
                          alt=" img"
                          className="h-[100px] w-[100px]"
                        />
                      </div>
                    </div>

                    <div className="w-2/3 flex flex-col md:flex-row ">
                      <div className="md:w-1/3 md:text-[15px] flex justify-center md:items-center font-bold ">
                        <p>{item.text}</p>
                      </div>
                      <div className="md:w-1/3 ">
                        <p className="flex justify-center md:items-center">
                          <span className="font-semibold">Price:</span> ₹
                          {item.price}
                        </p>
                        <p className="flex justify-center md:items-center">
                          <span className="font-semibold">Quantity:</span>{" "}
                          {item.quantity}
                        </p>
                      </div>
                      <div className="md:w-1/3">
                        <p className="flex justify-center md:items-center">
                          <span className="font-semibold">Total:</span> ₹
                          {item.total.toFixed(2)}
                        </p>
                        <div>
                          <button onClick={() => handleDelete(item)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {cart.length >= 1 && (
              <button className="" onClick={handleClear}>
                Clear All
              </button>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow mb-6 flex flex-col items-center justify-center">
          <div>Total items:{totalQuantity}</div>
          <div>Total Price:₹{totalPrice}</div>

          <button onClick={handleProceed}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
