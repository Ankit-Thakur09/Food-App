// import React from "react";

import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-orange-100 py-12 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4">
          About <span className="text-orange-500">Us</span>
        </h2>
        <p className="text-lg mb-8">
          Welcome to <strong>[Your Website Name]</strong>, where passion for
          food meets the joy of sharing. Explore authentic flavors, crafted with
          love and precision, to delight your taste buds.
        </p>

        {/* Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500 group-hover:text-orange-600 transition-colors">
                Farm-Fresh Ingredients
              </h3>
              <p>
                We source locally grown produce and premium ingredients to craft
                meals that are as fresh as they are flavorful.
              </p>
            </div>
            <div className="bg-orange-100 p-4 text-orange-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Discover More →
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500 group-hover:text-orange-600 transition-colors">
                Authentic Recipes
              </h3>
              <p>
                Our chefs combine timeless techniques with modern twists to
                create dishes you will always remember.
              </p>
            </div>
            <div className="bg-orange-100 p-4 text-orange-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Discover More →
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-orange-500 group-hover:text-orange-600 transition-colors">
                Passionate Service
              </h3>
              <p>
                From the moment you arrive to the last bite, our team is
                dedicated to ensuring an exceptional dining experience.
              </p>
            </div>
            <div className="bg-orange-100 p-4 text-orange-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Discover More →
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <p className="text-lg mb-4">
            Let us take you on a culinary journey that’s as exciting as it is
            delicious.
          </p>
          <NavLink to="/menu">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition-all">
              Explore Our Menu
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
