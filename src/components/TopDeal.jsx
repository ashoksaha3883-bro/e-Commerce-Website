// components/TopDeal.jsx
import React from "react";
import { Link } from "react-router-dom";
import { products, productImages } from "../data/products";

const TopDeal = () => {
  const dealProducts = products.filter(p => p.category === 'deals');

  return (
    <section className="py-8 px-4 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🔥 Top Deals on Clothes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {dealProducts.map((product) => {
          const originalIndex = products.findIndex(p => p.id === product.id);
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden 
              border border-gray-100 block
              transition-all duration-300 ease-in-out
              hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={productImages[originalIndex]}
                alt={product.name}
                className="h-40 w-full object-cover transition-transform duration-500 hover:scale-110"
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
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    Deal
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

export default TopDeal;