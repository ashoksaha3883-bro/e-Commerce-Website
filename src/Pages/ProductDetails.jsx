// src/Pages/ProductDetails.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products, productImages } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  const productImage = productImages[productIndex];

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-blue-600 underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImage,
    });
    alert("Added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
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
        Back to Home
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={productImage}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-lg">
              {"★".repeat(product.rating)}
            </span>
            <span className="text-gray-300 text-lg">
              {"★".repeat(5 - product.rating)}
            </span>
            <span className="text-gray-600 ml-2">
              ({product.rating} stars)
            </span>
          </div>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          <div className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;