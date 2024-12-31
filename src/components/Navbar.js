import React from 'react';
import {Link} from 'react-router-dom'
 import MobileNavigation from './MobileNavigation'
function Navbar({ categories, activeCategory, onCategoryChange}) {
return (
     <nav className="p-4" style={{ backgroundColor: '#2c3e50'}}>
     <div className="container mx-auto flex justify-between items-center">
         <Link to="/" className="text-white font-bold text-xl">Clothing Store</Link>
        <MobileNavigation categories={categories} activeCategory={activeCategory} onCategoryChange={onCategoryChange}/>
      <ul className='md:flex space-x-6 items-center hidden'>
      {/* Here are some more navbar buttons if you needed to have it in your design  */}
    </ul>
    </div>
     </nav>
  );
}
export default Navbar;