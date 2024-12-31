import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Button,Badge,Drawer } from 'antd';
import { MoonOutlined, SunOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './App.css'; // Import to use the animation

function App() {
  const categories = [
    'All', 'Hoodies', 'Pants', 'Jackets', 'T-Shirts',
  ];

  const [activeCategory, setActiveCategory] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);



    const handleCategoryChange = (category) => {
      setActiveCategory(category);
    };

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
    const backgroundColor = isDarkMode ? '#1e1e1e' : '#f4f4f4';
    const textColor = isDarkMode ? 'white' : '#333333';

   const openCart = () => {
    setIsCartOpen(true);
    };

  const closeCart = () => {
      setIsCartOpen(false);
  };

  const handleAddToCart = (product) => {
      setCart([...cart, product])
    };

      return (
        <Router>
          <div style={{ backgroundColor, color: textColor }}>
            <div className='flex justify-between items-center mr-5'>
               <div className="discount-text-container">
                   <div className="discount-text">
                         🔥 Limited-Time Discount! 🔥
                  </div>
               </div>

                 <div className='flex items-center space-x-4' >
                    <Button
                      type="text"
                        onClick={openCart}
                    icon={
                       <Badge count={cart.length}>
                             <ShoppingCartOutlined style={{fontSize:24}}  />
                       </Badge>

                    }

                      />
                 <Button
                    type="text"
                    onClick={toggleDarkMode}
                    icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
                 />
               </div>
              </div>
           <Navbar categories={categories} activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
                <Routes>
                 <Route path="/" element={<Home addToCart={handleAddToCart} />} />
                 <Route path="/admin" element={<AdminDashboard />} />
             </Routes>
               <Footer />
              <Drawer
                title="Your Cart"
                placement="right"
                   onClose={closeCart}
                 open={isCartOpen}
                >
                  {cart.length === 0 ? <p>No items in cart.</p> :
                  cart.map((item,index) =>(
                     <div key={index} className='flex items-center  space-x-4 mb-4 p-2 border'>
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                             className="w-16 h-16 object-cover"
                           />
                         <div>
                             <p className='font-bold'>{item.name}</p>
                            <p>Size: {item.size}, Quantity: {item.quantity}</p>
                           <p>Price: ${item.price * item.quantity}</p>
                          </div>
                       </div>
                   ))}
                   {cart.length > 0 && (
                 <div className='flex justify-end' >
                      <Button type="primary">
                            Complete purchase
                       </Button>
                 </div>
                    )}
              </Drawer>
            </div>
          </Router>
    );
  }

 export default App;