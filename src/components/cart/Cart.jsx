import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, setTotals, deleteCard } from "../../feature/CounterThis";


function Cart() {
  // Get the cart items from Redux state
  const cart = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();
  // const totalPrice = cart.reduce(
  //   (accumulator, item) => accumulator + item.total,
  //   0
  // );
  // const totalQuantity = cart.reduce(
  //   (accumulator, item) => accumulator + item.quantity,
  //   0
  // );
  const totalQuantity = useSelector((state) => state.counter.totalQuantity);
  const totalPrice = useSelector((state) => state.counter.totalPrice);
  useEffect(() => {
    dispatch(setTotals({ totalQuantity, totalPrice }));
  }, [dispatch, totalQuantity, totalPrice]);

  const handleClear = () => {
    dispatch(deleteAll());
  };
    const handleDelete = (dishId) => {
      dispatch(deleteCard(dishId));
    };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="flex flex-col-reverse md:flex-row px-2">
        <div className=" w-full md:w-2/3 border border-gray-300 py-4 bg-white shadow-lg ">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 pb-2 border border-x-0 border-t-0 border-gray-300 items-center "
                >
                  <div className="h-[120px] w-1/4  overflow-hidden flex items-center justify-center gap-2 ">
                    <div className="w-1/4 text-center">{index + 1}</div>
                    <img
                      src={item.img}
                      alt=" img"
                      className="h-[100px] w-[100px]"
                    />
                  </div>
                  <div className="w-1/4">
                    <p>{item.text}</p>
                  </div>
                  <div className="w-1/4">
                    <p>
                      <strong>Price:</strong> ₹{item.price}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                  </div>
                  <div className="w-1/4">
                    <p>
                      <strong>Total:</strong> ₹{item.total.toFixed(2)}
                    </p>
                    <div>
                      <button onClick={handleDelete}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={handleClear}>Clear All</button>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/3">
          <div>Total items:{totalQuantity}</div>
          <div>Total Price:{totalPrice}</div>

          <button onClick={() => console.log("Proceed to Checkout")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
