import { useSelector } from "react-redux";

function Cart() {
  // Get the cart items from Redux state
  const cart = useSelector((state) => state.counter.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>
                <strong>Dish Name:</strong> {item.text}
              </p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Total:</strong> ${item.total.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => console.log("Proceed to Checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
