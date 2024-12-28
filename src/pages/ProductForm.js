import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ProductForm({ onSubmit, onCancel }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: 0,
        description: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const onSubmitForm = (data) => {
        onSubmit(data);
        setNewProduct({
            name: '',
            category: '',
            price: 0,
            description: '',
            imageUrl: ''
        });
    };
    return (
        <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add new Product</h2>
            <form onSubmit={handleSubmit(onSubmitForm)} className="mb-4 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                    <input
                        type="text"
                        name="name"
                         id="name"
                      {...register('name', { required: 'Product name is required', minLength: {value:3, message:'Product name must be at least 3 characters'} })}
                    value={newProduct.name}
                        onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   />
                    {errors.name && <span className="text-red-500 text-xs italic">{errors.name.message}</span>}
                </div>
                <div>
                   <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
                     <input
                        type="text"
                        name="category"
                        id="category"
                    {...register('category', { required: 'Category is required', minLength: {value:3, message:'Category must be at least 3 characters'} })}
                    value={newProduct.category}
                        onChange={handleChange}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                   {errors.category && <span className="text-red-500 text-xs italic">{errors.category.message}</span>}
                </div>

                <div>
                   <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                   <input
                      type="number"
                      name="price"
                     id="price"
                   {...register('price', { required: 'Price is required', min:0, valueAsNumber:true})}
                       value={newProduct.price}
                       onChange={handleChange}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     />
                    {errors.price && <span className="text-red-500 text-xs italic">{errors.price.message}</span>}
                </div>
                <div>
                   <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                     <textarea
                         name="description"
                         id="description"
                       {...register('description', { required: 'Description is required', minLength: {value:10, message: 'Description must be at least 10 characters'} })}
                       value={newProduct.description}
                         onChange={handleChange}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   />
                     {errors.description && <span className="text-red-500 text-xs italic">{errors.description.message}</span>}
                </div>
                <div>
                   <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">ImageUrl:</label>
                   <input
                        type="text"
                        name="imageUrl"
                         id="imageUrl"
                       {...register('imageUrl', { required: 'Image URL is required', pattern: {
                         value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, message:"Please, provide a valid URL for your image" } })}
                       value={newProduct.imageUrl}
                        onChange={handleChange}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     />
                     {errors.imageUrl && <span className="text-red-500 text-xs italic">{errors.imageUrl.message}</span>}
                 </div>
                <div className="flex justify-end mt-4 space-x-2">
                    <button
                        type='button'
                        onClick={onCancel}
                         className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                    >
                         Cancel
                      </button>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                    >
                        Add
                 </button>
            </div>
            </form>
        </div>
   );
}
export default ProductForm;