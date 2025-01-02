// import React from "react";

import { useSelector } from "react-redux";

function About() {
   const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="bg-gray-900 h-screen flex items-center justify-center">
        <div className="bg-white h-[16rem] w-[30rem] m-auto border rounded-[2.5rem] rounded-br-3xl border-white overflow-hidden">
          <div className="h-[15.4rem] w-[29.4rem] bg-gray-900 rounded-3xl rounded-br-2xl text-white text-center"> count{ count}</div>
        </div>
      </div>
    </>
    // <div className="p-8 bg-gray-50">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Header Section */}
    //     <header className="text-center mb-12">
    //       <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
    //       <p className="text-lg text-gray-600 mt-2">
    //         We deliver delicious meals right to your doorstep!
    //       </p>
    //     </header>

    //     {/* Company Description Section */}
    //     <section className="mb-16">
    //       <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
    //       <p className="text-lg text-gray-600 mt-4">
    //         At Foodie Delivery, we believe that food is not just sustenance, but
    //         an experience. We strive to bring you the finest meals from top
    //         restaurants, delivered fast and fresh to your doorstep.
    //       </p>
    //     </section>

    //     {/* Mission Section */}
    //     <section className="mb-16">
    //       <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
    //       <p className="text-lg text-gray-600 mt-4">
    //         Our mission is to make food delivery easy, fast, and affordable for
    //         everyone. We partner with local restaurants to provide a wide
    //         variety of meal options, ensuring there is something for every
    //         taste.
    //       </p>
    //     </section>

    //     {/* Values Section */}
    //     <section className="mb-16">
    //       <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
    //         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    //           <h3 className="font-semibold text-xl text-gray-800">Quality</h3>
    //           <p className="text-gray-600 mt-2">
    //             We prioritize quality in every dish we deliver.
    //           </p>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    //           <h3 className="font-semibold text-xl text-gray-800">
    //             Customer Satisfaction
    //           </h3>
    //           <p className="text-gray-600 mt-2">
    //             Our customers are at the heart of everything we do.
    //           </p>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    //           <h3 className="font-semibold text-xl text-gray-800">
    //             Innovation
    //           </h3>
    //           <p className="text-gray-600 mt-2">
    //             We are constantly looking for ways to improve and innovate.
    //           </p>
    //         </div>
    //       </div>
    //     </section>

    //     {/* Contact Section */}
    //     <section className="text-center">
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         Get in Touch
    //       </h2>
    //       <p className="text-lg text-gray-600 mb-6">
    //         Have any questions or feedback? We had love to hear from you!
    //       </p>
    //       <a
    //         href="mailto:ankitThakur12499@gmail.com"
    //         className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
    //       >
    //         Contact Us
    //       </a>
    //     </section>
    //   </div>
    // </div>
  );
}

export default About;
