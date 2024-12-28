import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import EditModal from './EditModal';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../api';
import Spinner from "../components/Spinner"; // Import spinner for loading indicator
function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProductFormOpen, setNewProductFormOpen] = useState(false)
    const [loading, setLoading] = useState(true); // Add loading state for overall component
    const [formLoading, setFormLoading] = useState(false); // Loading state for the form

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
               const data =  await fetchProducts();
                setProducts(data)
            } catch (error) {
                console.error("Error fetching:", error);
             }finally {
                setLoading(false);
            }
     }
        loadProducts();
    }, []);


  const handleProductAddOpen=()=>{
        setNewProductFormOpen(true)
    }

   const handleProductAddClose=()=>{
         setNewProductFormOpen(false)
    }

  const handleEdit = (product) => {
    setEditingProduct(product);
        setIsModalOpen(true);
   };
   const handleCloseModal = () => {
    setIsModalOpen(false);
       setEditingProduct(null)
     };
  const handleAddProduct = async (newProduct) => {
      setFormLoading(true)
        try {
            const addedProduct = await createProduct(newProduct)
            setProducts([...products, addedProduct]);
          handleProductAddClose()

       } catch (err) {
           console.error("Error adding product: ", err)
      }finally{
           setFormLoading(false);
       }
  }
 const handleUpdateProduct = async (product) => {
        setFormLoading(true);
    try {
     await updateProduct(product.id,product);
        // After update re fetch
      const updatedProducts = products.map((p)=>
        p.id === product.id ? {...product} :p )
           setProducts(updatedProducts)

          handleCloseModal()

         } catch (error) { console.error("Error updating: ", error) }finally{
           setFormLoading(false)
         }
 };


const handleDelete = async (productId) => {
   setFormLoading(true);
    try {
         await deleteProduct(productId);

        //re-filter
       const filtered = products.filter((p) => p.id !== productId);
       setProducts(filtered)

      } catch (error) {
         console.error('Error deleting product:', error)
    }finally{
         setFormLoading(false)
    };
   };


    return (
        <div className="container mx-auto mt-8">
           <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Admin Dashboard</h1>
           <div className="mb-6 flex justify-end">
             <button
                 onClick={()=> handleProductAddOpen()}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                 Add Product
             </button>
            </div>

        {newProductFormOpen && (
            <div className='mb-4'>
               <ProductForm
                    onSubmit={handleAddProduct}
                    onCancel={handleProductAddClose}
              />
           </div>
         )}


            {loading ? (
              <Spinner/>
            ) : (
           <div >
              <ProductTable
               products={products}
                  onEdit={handleEdit}
                onDelete={handleDelete}
               />
           </div>
               )}

           {formLoading ? (
                <div className="flex items-center justify-center mt-2">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
                 </div>
            ):null
            }

            <EditModal
               product={editingProduct}
                onClose={handleCloseModal}
                onUpdate={handleUpdateProduct}
                open={isModalOpen}
            />
        </div>
     );
   }
export default AdminDashboard;