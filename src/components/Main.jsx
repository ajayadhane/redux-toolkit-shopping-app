import React from "react";

function Main() {
  return (
    <main className="flex-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to MyStore
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Discover amazing products and enjoy a seamless shopping experience.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Shop Now
        </button>
      </div>
    </main>
  );
}

export default Main;
