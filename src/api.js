const API_BASE_URL = 'http://localhost:3001'; // Or your JSON server port

export const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        // Add related products to each product
       const productsWithRelated = products.map((product) => ({
        ...product,
            relatedProducts:[
               products[Math.floor(Math.random() * products.length)],
              products[Math.floor(Math.random() * products.length)],
              products[Math.floor(Math.random() * products.length)],
          ]
        }));
      return productsWithRelated;
     } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
      }
   };

  export const createProduct = async (newProduct) => {
    try {
     const response = await fetch(`${API_BASE_URL}/products`, {
           method: 'POST',
            headers: {
            'Content-Type': 'application/json',
              },
            body: JSON.stringify(newProduct)
       });
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
           }
         return await response.json();

     }catch(err) {console.error("Error POST on db ",err);
    throw err; }
   };

  export const updateProduct = async (id, product) => {
        try {
          const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'PUT',
          headers: {
             'Content-Type': 'application/json',
         },
          body: JSON.stringify(product)
        });
      if(!response.ok) {
       throw new Error(`Http PUT Error: ${response.status}`)
       }

          return await response.json()

   }catch(error)
   { console.error("Error PUT db on products id:",error); throw error}
 }
  

  export const deleteProduct = async (id) => {
         try {
            const response = await fetch(`${API_BASE_URL}/products/${id}`, {
               method: 'DELETE',
         });
              if(!response.ok){
               throw new Error(`http Error on Delete method: ${response.status}`)
               }
       
           return await response.ok;
         }catch(error){ console.error('error when deleting product:',error);
      throw error;
  }
   };