import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.product.items);
  console.log(productSelector);

  return (
    <main className="flex-1 bg-linear-to-r mt-16 from-indigo-300 via-purple-300 to-blue-300">
      <div className="container mx-auto px-6 py-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to MyStore
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Discover amazing products and enjoy a seamless shopping experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {productSelector.length > 0 &&
          productSelector.map(({ id, thumbnail, title, rating, price }) => (
            <div
              key={id}
              className="
    bg-indigo-100 rounded-2xl shadow-md border border-gray-200 p-4 flex flex-col
    transition-all duration-300 ease-out  
    hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-300
    hover:bg-gradient-to-br hover:from-white hover:via-indigo-50 hover:to-purple-50
  "
            >
              <div className="w-full h-40 rounded-xl overflow-hidden relative">
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl
                              transition-transform duration-500 ease-out
                              hover:scale-110"
                />

                <div
                  className="absolute top-0 left-0 w-full h-16 
                            bg-gradient-to-b from-black/10 to-transparent"
                ></div>
              </div>

              <div className="flex flex-col mt-3 flex-grow">
                <h2 className="text-lg font-semibold text-gray-900 truncate hover:text-indigo-700 transition-all">
                  {title}
                </h2>

                <div className="text-yellow-500 font-medium flex items-center gap-1 mt-1">
                  ⭐ {rating}
                </div>

                <div className="text-indigo-700 text-xl font-bold mt-1 mb-2">
                  ₹ {price}
                </div>

                <button
                  className=" cursor-pointer
                              mt-auto bg-linear-to-r from-indigo-900 via-purple-900 to-blue-950 
                              text-white font-semibold py-2.5 rounded-lg
                              transition-all duration-300 ease-out
                              hover:from-indigo-800 hover:via-purple-800 hover:to-blue-900
                              hover:scale-[1.03]
                            "
                  onClick={() => dispatch(addItems())}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Products;
