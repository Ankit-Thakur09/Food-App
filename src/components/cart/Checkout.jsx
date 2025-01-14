import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../feature/CounterThis";
import { useNavigate } from "react-router-dom";
import { Utensils, Clock, CreditCard } from "lucide-react";


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

 
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [orderPlaced, setOrderPlaced] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update current step based on which field is being edited
    if (["name", "email", "address"].includes(name)) {
      setCurrentStep(2);
    } else if (name === "paymentMethod") {
      setCurrentStep(3);
    }
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     alert("Order placed successfully!");
     
  //   }
  // };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        setOrderPlaced(true);
         dispatch(deleteAll());
        alert("Order placed successfully! Your delicious food is on the way!");
      }
    };
   const StepIndicator = () => (
     <div className="flex justify-between items-center mb-8 relative">
       <div className="absolute top-6 left-0 w-full h-0.5">
         <div className="w-full h-full bg-orange-200">
           <div
             className="h-full bg-orange-500 transition-all duration-500"
             style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
           />
         </div>
       </div>

       {[
         { name: "Cart", icon: <Utensils className="w-5 h-5" /> },
         { name: "Details", icon: <Clock className="w-5 h-5" /> },
         { name: "Payment", icon: <CreditCard className="w-5 h-5" /> },
       ].map((step, index) => (
         <div key={index} className="flex flex-col items-center z-10">
           <div
             className={`w-12 h-12 flex items-center justify-center rounded-full text-white 
            ${index + 1 <= currentStep ? "bg-orange-500" : "bg-gray-300"}
            transition-colors duration-500 border-4 
            ${
              index + 1 <= currentStep ? "border-orange-500" : "border-gray-300"
            }`}
           >
             {step.icon}
           </div>
           <span
             className={`mt-2 text-sm font-medium ${
               index + 1 <= currentStep ? "text-orange-800" : "text-gray-500"
             }`}
           >
             {step.name}
           </span>
         </div>
       ))}
     </div>
   );

   if (orderPlaced) {
     return (
       <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
         <div className="text-center p-8 bg-white rounded-lg shadow-lg">
           <h2 className="text-3xl font-bold text-orange-600 mb-4">
             Order Confirmed!
           </h2>
           <p className="text-lg text-gray-700">
             Thank you for your order. Your delicious food is being prepared!
           </p>
         </div>
       </div>
     );
   }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-4">
          Complete Your Order
        </h1>
        <p className="text-center text-orange-600 mb-8">Your delicious meal is just a few steps away!</p>

        <StepIndicator />

        <div className="flex gap-8">
          {/* Left Column - Order Summary */}
          <div className="w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-100 sticky top-6">
              <h2 className="text-2xl font-bold text-orange-800 mb-4">Your Order</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-3 border-b border-orange-100 pb-2">
                  <div className="flex items-center">
                    <Utensils className="w-4 h-4 text-orange-500 mr-2" />
                    <span className="text-gray-700 font-medium">
                      {item.text} <span className="text-orange-500">×{item.quantity}</span>
                    </span>
                  </div>
                  <span className="text-orange-800 font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4 text-lg font-bold bg-orange-50 p-4 rounded-lg">
                <span className="text-orange-800">Total Amount</span>
                <span className="text-orange-600">₹{totalPrice}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-2/3">
            <form className="bg-white p-6 rounded-lg shadow-lg space-y-6 border border-orange-100" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-orange-800">Personal Details</h3>
                <div>
                  <label className="block text-orange-800 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setCurrentStep(2)}
                    className={`w-full p-3 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-orange-200"
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-orange-800 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setCurrentStep(2)}
                    className={`w-full p-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-orange-200"
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-orange-800 font-medium mb-2">Delivery Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onFocus={() => setCurrentStep(2)}
                    className={`w-full p-3 rounded-lg border ${
                      errors.address ? "border-red-500" : "border-orange-200"
                    } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    placeholder="Enter your delivery address"
                    rows="3"
                  ></textarea>
                  {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-orange-100">
                <h3 className="text-xl font-semibold text-orange-800">Payment Details</h3>
                <div>
                  <label className="block text-orange-800 font-medium mb-2">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    onFocus={() => setCurrentStep(3)}
                    className="w-full p-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cashOnDelivery">Cash on Delivery</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all transform hover:scale-[1.02]"
              >
                Place Order Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 

export default Checkout;
