import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const selector = useSelector((state) => state.product.items);
  console.log(selector);

  return (
    <main className="flex-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to MyStore
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Discover amazing products and enjoy a seamless shopping experience.
        </p>

        {/* Shop Now Button */}
        <button
          className="cursor-pointer
          bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-950 
          text-white font-semibold py-3 px-6 rounded-lg
          transition-all duration-300 ease-out
          hover:from-indigo-800 hover:via-purple-800 hover:to-blue-900"
          onClick={() => dispatch(addItems())}
        >
          Shop Now
        </button>

        {/* Remove Button */}
        <button
          className="cursor-pointer ml-4
          bg-gradient-to-r from-red-800 via-red-900 to-red-950
          text-white font-semibold py-3 px-6 rounded-lg
          transition-all duration-300 ease-out
          hover:from-red-700 hover:via-red-800 hover:to-red-900"
          onClick={() => dispatch(removeItems())}
        >
          Remove Items
        </button>
      </div>
    </main>
  );
}

export default Products;
