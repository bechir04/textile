import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function EditModal({ product, onClose, onUpdate, open }) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [editingProduct, setEditingProduct] = useState(product || {
            name: '',
            category: '',
            price: 0,
            description: '',
            imageUrl: ''
        });


    useEffect(() => {
        if (product) {
             setValue('name', product.name);
           setValue('category', product.category);
             setValue('price', product.price);
          setValue('description', product.description);
          setValue('imageUrl', product.imageUrl);
            setEditingProduct(product); // set default data to initial state.
        }
   }, [product, setValue]);


    if (!open || !product) {
        return null;
    }


    const onSubmitForm = (data) => {
            onUpdate(data);
       };

    return (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md shadow-xl relative">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Edit Product</h2>

                <form onSubmit={handleSubmit(onSubmitForm)}  className='space-y-4' >

                     <div>
                         <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
                           <input
                               type="text"
                                name="name"
                             id="name"
                             {...register('name', { required: 'Product name is required', minLength: {value:3, message:'Product name must be at least 3 characters'} })}
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
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                             {errors.imageUrl && <span className="text-red-500 text-xs italic">{errors.imageUrl.message}</span>}
                      </div>


                     <div className='mt-4 flex justify-end space-x-2'>
                        <button onClick={onClose}  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                            Cancel
                         </button>
                   <button type='submit'  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                           Update
                        </button>
                      </div>
             </form>

             </div>
             </div>
      );
 }
    export default EditModal;