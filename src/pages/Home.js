import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import CategoryFilter from '../components/CategoryFilter';
import { fetchProducts } from '../api';
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";

function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
              const data = await fetchProducts();
              setProducts(data);
              setFilteredProducts(data);
              const allCategories = ["All", ...new Set(data.map(product => product.category))];
              setCategories(allCategories);
            } catch (error) {
                console.error("Error loading products:", error);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    const handleShowDetails = (product) => {
        setSelectedProduct(product);
      };

     const handleCloseModal = () => {
         setSelectedProduct(null);
    };

    const handleCategoryChange = (category) => {
      setActiveCategory(category);
         if (category === "All") {
          setFilteredProducts(products);
       } else {
           const filtered = products.filter((product) => product.category === category);
         setFilteredProducts(filtered);
        }
    };

    return (
        <div className="container mx-auto mt-8">
             <section className="relative overflow-hidden py-16 bg-gray-100">
                <div className="container mx-auto text-center relative z-10">
                     <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Your Style: Performance Meets Fashion</h1>
                     <p className="text-gray-700 mb-8">Explore our curated selection of high-quality athletic apparel designed for your active life.</p>
                     <Link to="/"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-200">
                      Shop Now
                   </Link>
               </div>
         </section>
        <div className='mb-5 flex justify-end' >
            <Link to="/admin"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                    Admin Dashboard
           </Link>
        </div>

        <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
        />
          {loading ? (
            <Spinner />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {filteredProducts.map((product) => (
                   <ProductCard
                       key={product.id}
                        product={product}
                         onShowDetails={handleShowDetails}
                      />
                ))}
            </div>
          )}
            <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        </div>
    );
}

export default Home;