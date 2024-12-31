import React from 'react';

function ProductTable({ products, onEdit, onDelete }) {
     return (
       <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                      <tr>
                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
               </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product,index) => (
                         <tr key={product.id}  style={{backgroundColor: index%2===0 ? '#f9f9f9' :'#ffffff' }} >
                               <td className="px-6 py-4 whitespace-nowrap text-white">{product.id}</td>
                             <td className="px-6 py-4 whitespace-nowrap text-white">{product.name}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-white">{product.category}</td>
                         <td className="px-6 py-4 whitespace-nowrap text-white">${product.price}</td>
                         <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                <button
                                    onClick={() => onEdit(product)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                               >
                                    Edit
                                 </button>
                             <button
                                    onClick={() => onDelete(product.id)}
                                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                                 >
                                      Delete
                             </button>
                        </td>
                         </tr>
                        ))}
                   </tbody>
               </table>
         </div>
     );
   }
   
   export default ProductTable;