import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import CategoryFilter from '../components/CategoryFilter';
import { fetchProducts } from '../api';
import { Link } from 'react-router-dom';
import Spinner from "../components/Spinner";
import { Button } from 'antd';

import img1 from '../images/hang-up-vintage-london-580x464.jpg';
import img2 from '../images/SNY04089.jpg_edit.width-640_ln7jm6QxYVkHFHaT.jpg';
import img3 from '../images/My-year-of-no-new-clothes.jpg';



function Home() {
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [selectedProduct, setSelectedProduct] = useState(null);
const [categories, setCategories] = useState([]);
const [activeCategory, setActiveCategory] = useState("All");
const [loading, setLoading] = useState(true);
const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgroundImages = [
       img1,img2,img3
    ];
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

    useEffect(() => {
      const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 2500);

        return () => clearInterval(interval);
     }, [backgroundImages.length]);


  return (
    
      <div className="container mx-auto mt-8">
           <section
                className="relative overflow-hidden py-16"
                 style={{
                     backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
                     backgroundSize: 'cover',
                      backgroundPosition: 'center',
                        transition: 'background-image 1s ease-in-out',
                        backgroundColor: '#1e1e1e'
                 }}
              >
           <div className="container mx-auto text-center relative z-10">
           <h1 className="text-4xl font-bold text-white mb-4">Discover Your Style: Performance Meets Fashion</h1>
           <p className="text-gray-300 mb-8">Explore our curated selection of high-quality athletic apparel designed for your active life.</p>
             <Link to="/"
                     className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out">
                        Shop Now
                      </Link>
              </div>
           </section>
      <div className='mb-5 flex justify-end' >
        <Link to="/admin"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
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