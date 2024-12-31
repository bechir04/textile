import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; 

function ProductModal({ product, onClose, addToCart }) {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    const handleAddToCart = () => {
        if (selectedSize && quantity > 0) {
            addToCart({
                ...product,
                size: selectedSize,
                quantity: parseInt(quantity, 10)
            });
              handleClose()
        } else {
          alert("Please, select size and valid quantity")
       }
    };

   const handleClose = ()=>{
       onClose()
   }
  const handleSizeChange = (event) => {
     setSelectedSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity > 0 ? newQuantity : 1);
    };


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
                         <div className='mb-3' >
                           <label className="block text-gray-700 text-sm font-bold mb-2">Select Size:</label>
                             <select
                                value={selectedSize}
                                onChange={handleSizeChange}
                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   >
                                 <option value="" disabled>Select size</option>
                                <option value="small">Small</option>
                               <option value="medium">Medium</option>
                              <option value="large">Large</option>
                              <option value="xlarge">XLarge</option>
                           </select>
                         </div>
                        <div className='mb-3'>
                       <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
                         <input
                          type="number"
                             id="quantity"
                           min="1"
                           value={quantity}
                          onChange={handleQuantityChange}
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                       />
                     </div>
                    <Button onClick={handleAddToCart}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                       >
                      Add to cart
                     </Button>
                    <button
                        onClick={handleClose}
                       className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 mt-2"
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