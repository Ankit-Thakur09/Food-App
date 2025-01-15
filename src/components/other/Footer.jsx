// import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-50 text-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-rose-600">FoodiesHub</h3>
            <p className="text-gray-600">
              Bringing delicious meals to your doorstep with passion and quality
              ingredients since 2020.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-rose-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-rose-500" />
                <span>info@foodieshub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-rose-500" />
                <span>123 Foodie Street, Cuisine City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-rose-600 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Our Menu",
                "Special Offers",
                "Reservations",
                "About Us",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-rose-500 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold text-rose-600 mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2">
              {[
                { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
                { day: "Saturday", hours: "9:00 AM - 11:00 PM" },
                { day: "Sunday", hours: "10:00 AM - 9:00 PM" },
              ].map((schedule) => (
                <div key={schedule.day} className="flex items-center gap-2">
                  <Clock size={16} className="text-rose-500" />
                  <div>
                    <div className="text-gray-600">{schedule.day}</div>
                    <div className="text-sm text-gray-500">
                      {schedule.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-semibold text-rose-600 mb-4">
              Stay Connected
            </h4>
            <div className="mb-6">
              <p className="mb-2 text-gray-600">
                Subscribe to our newsletter for special offers!
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded bg-white text-gray-600 placeholder-gray-400 border border-gray-200 focus:outline-none focus:border-rose-500"
                />
                <button className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-medium text-rose-600">Follow Us</h5>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="p-2 bg-white text-gray-600 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} FoodiesHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
