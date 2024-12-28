import React from 'react';

function ProductModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md shadow-xl relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover mb-4 rounded-md shadow-md"
                 />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                    </div>
                    <div className='flex items-end flex-col'>
                      <p className="text-gray-800 font-bold text-xl mb-4">Price: ${product.price}</p>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                       >
                       Close
                     </button>
                   </div>
             </div>
         </div>
      </div>
   );
}

export default ProductModal;