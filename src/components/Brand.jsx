// components/Brand.jsx
import React from "react";
import { Link } from "react-router-dom";
import { products, productImages } from "../data/products";

const Brand = () => {
  // Filter products by brand "Urban" – you can change this or make it dynamic via route param
  const brandProducts = products.filter(p => p.brand === 'Urban');

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
        <h2 className="text-3xl font-bold text-gray-800">🏷️ Urban Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {brandProducts.map((product) => {
          const originalIndex = products.findIndex(p => p.id === product.id);
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 block"
            >
              <img
                src={productImages[originalIndex]}
                alt={product.name}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-1 ">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 text-lg">
                    {"★".repeat(product.rating)}
                  </span>
                  <span className="text-gray-300 text-lg">
                    {"★".repeat(5 - product.rating)}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    Urban Brand
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Brand;