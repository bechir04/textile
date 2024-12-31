import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
function MobileNavigation({ categories = [], activeCategory, onCategoryChange }) {  //add default values
   const [isOpen, setIsOpen] = useState(false);
   const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
              setIsOpen(false);
            }
        };
       document.addEventListener("mousedown", handleClickOutside);
   return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
   }, [navRef]);


     const handleCategorySelect=(category)=>{
         onCategoryChange(category);
        setIsOpen(false)
    }

  const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
   return (
      <nav ref={navRef} className="md:hidden absolute top-0 right-0 bg-gray-800 z-50" >
    {/* Mobile Menu Button */}
    <button
      onClick={toggleMenu}
      type='button'
        className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-110">
          <span className="sr-only">Open Main Menu</span>
            <svg  width='30'  height="30"  fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 18H20V16H4v2ZM4 13H20V11H4v2ZM4 6v2h16V6H4Z" fill="currentColor"></path>
         </svg>
        </button>
           {isOpen &&(
        <div  className="absolute left-0 right-0 top-full w-screen flex items-start justify-center py-4 space-y-3 flex-col  bg-gray-800 shadow-lg z-50"  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
           <div className='flex  flex-col '>
            {categories.map((category, index) => (
                     <button
                         key={index}
                         onClick={() => handleCategorySelect(category)}
                     className={` block px-4 py-2 transition duration-300 hover:text-gray-900 ease-in-out rounded-md text-white focus:bg-gray-200 hover:bg-gray-50 text-left w-full focus:outline-none   `} >
                      {category}
                     </button>
                   ))}
                      <div className='text-center'>
                            <Link to="/admin"
                               className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-flex w-max justify-center text-base ">
                              Admin Dashboard
                           </Link>
                        </div>
              </div>
        </div>
               )}
    </nav>
    );
}

 export default MobileNavigation;