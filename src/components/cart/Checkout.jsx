import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../feature/CounterThis";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
    const totalPrice = useSelector((state) => state.counter.totalPrice);
    const cart = useSelector((state) => state.counter.cart);
    const dispatch = useDispatch();
     const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditCard",
  });

    const [errors, setErrors] = useState({});
  

//   const cartItems = [
//     { id: 1, name: "Pizza", quantity: 2, price: 15 },
//     { id: 2, name: "Burger", quantity: 1, price: 10 },
//   ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert("Order placed successfully!");
        dispatch(deleteAll());
    }
  };



useEffect(() => {
  if (cart.length === 0) {
    navigate("/cart");
  }
}, [cart, navigate]);

  // const handleClear = () => {
  //   dispatch(deleteAll());
  // };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Step Indicator */}
      <div className="flex items-center mb-6">
        <div className="flex-1 text-center">
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full">
            1
          </span>
          <p className="mt-2">Cart</p>
        </div>
        <div className="w-1/4 h-1 bg-gray-300"></div>
        <div className="flex-1 text-center">
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full">
            2
          </span>
          <p className="mt-2">Details</p>
        </div>
        <div className="w-1/4 h-1 bg-gray-300"></div>
        <div className="flex-1 text-center">
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full">
            3
          </span>
          <p className="mt-2">Payment</p>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.text} (x{item.quantity})
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border w-full p-2 rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border w-full p-2 rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block mb-2">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`border w-full p-2 rounded ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your address"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
        <div>
          <label className="block mb-2">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="border w-full p-2 rounded border-gray-300"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>
        <button
          type="submit"
                  className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 w-full"
                  
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
