import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const cartSelector = useSelector((state) => state.cart.items);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-950 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold tracking-wide hover:text-blue-300 cursor-pointer">
          ReactVerse
        </div>

        <nav className="space-x-6 text-lg">
          <a href="#home" className="hover:text-blue-300 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300 transition-colors">
            About
          </a>
        </nav>

        <div className="relative cursor-pointer hover:text-blue-300 transition-colors">
          <FaShoppingCart size={24} />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            <strong>{cartSelector.length ? cartSelector.length : 0}</strong>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
