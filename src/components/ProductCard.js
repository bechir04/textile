import React from 'react';

function ProductCard({ product, onShowDetails }) {
  return (
    <div style={{ backgroundColor: '#fff5e1'}} className="shadow-md rounded-lg overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 mb-3">Category: {product.category}</p>
        <p className="text-gray-800 font-bold">${product.price}</p>
        <button
          onClick={() => onShowDetails(product)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-200"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default ProductCard;