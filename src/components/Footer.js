import React from 'react';

function Footer() {
  return (
      <footer className="py-6 mt-10" style={{ backgroundColor: '#2c3e50', color: '#fff' }}>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className='flex flex-col text-center items-start' >
              <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
              <p className='mb-2'>Phone: <a href="tel:+2615551234567" className="hover:text-gray-200"> +216-555-123-4567</a></p>
                   <p className='mb-2'> Email: <a href="mailto:support@clothingstore.com" className="hover:text-gray-200"> support@clothingstore.com</a> </p>
                <p> Address:  <a href="/" className="hover:text-gray-200"> City, State, Zip Code </a></p>
               </div>

               <div className="text-center md:text-left items-start flex flex-col">
                 <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
                   <ul className="list-none text-left pl-0 flex flex-col space-y-1" >
                 <li>
                   <a href="/" className="hover:text-gray-200"  >Shop</a>
                    </li>
                       <li>
                    <a href="/" className="hover:text-gray-200">About Us</a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-gray-200">Contact Us</a>
                   </li>
                       <li>
                        <a href="/" className="hover:text-gray-200">Returns & Exchanges</a>
                       </li>
                         <li>
                       <a href="/" className="hover:text-gray-200">Privacy Policy</a>
                     </li>
                     <li>
                      <a href="/" className="hover:text-gray-200">Terms of Service</a>
                     </li>
                 </ul>
            </div>
               <div className="items-start flex flex-col ">
                    <h4 className="text-xl font-bold mb-4 text-center md:text-left text-white" >Follow Us</h4>
                    <ul className="list-none text-left flex gap-3 pl-0 justify-center md:justify-start" >
                
                      <li><a href="https://www.instagram.com" target='_blank'  rel='noopener noreferrer' className='transition-colors hover:text-gray-200'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.045 4C19.418 4 18.901 4.068 18.492 4.219c-.654.243-1.122.725-1.334 1.376-.309.949-.518 1.964-.584 3.229-.074 1.447.133 2.407.36 3.254.208.768.69 1.26 1.342 1.51.4.15.7.213.927.246.511.086.891.101.916.128.667.114 1.032-.168 1.416-.517.127-.115.225-.23.315-.336.15-.175.418-.514.637-.729.417-.378.66-.884.747-1.337.216-.527.295-.926.266-1.362-.073-.893-.261-1.458-.505-1.936-.159-.308-.441-.583-.826-.803-.729-.407-1.89-.464-2.832-.464zm-3.789 3.423c.708-.147 1.438-.183 1.952-.036.545.151.914.497 1.003.997.055.286.059.446-.037.998-.256 1.567-1.445 3.104-1.987 3.569-.584.493-1.235.531-1.855.345-.498-.151-.974-.412-1.247-.987-.057-.138-.07-.327-.075-.653-.003-.437-.152-1.354.034-2.073.206-.759.582-1.04 1.287-.857.198.052.39.135.444.207zM12 8c-2.182 0-4 1.818-4 4s1.818 4 4 4 4-1.818 4-4-1.818-4-4-4zm0 1.531c.579 0 1.08.471 1.08 1.055 0 .585-.5 1.054-1.08 1.054-.579 0-1.08-.47-1.08-1.054 0-.584.501-1.055 1.08-1.055zm3.5 5.469a1.146 1.146 0 11-2.292 0 1.146 1.146 0 012.292 0z"
                         fill='white'/>
                      </svg>

                          </a></li>

                         <li>
                          <a href="https://www.facebook.com" target='_blank'  rel='noopener noreferrer'  className='transition-colors hover:text-gray-200'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13.397 20h-3.239V10.017H8.482V6.32h1.676V4.625c0-1.679 1.146-4.459 3.94-4.459h2.33v3.764h-1.548c-.327 0-.688.126-.688.841v1.531H14l-.289 3.682H13.397z" fill="white"/>
                         </svg>
                      </a></li>

                      <li><a  href="https://www.twitter.com" target='_blank' rel='noopener noreferrer'   className='transition-colors hover:text-gray-200' >
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.43 6.525c.106 1.826-1.211 3.765-2.958 4.498.146.145.283.298.41.454 2.328 3.254.787 7.862-3.608 7.957-.56.011-1.103.152-1.6.355-.009 0 .003-.004-.013.003-.165-.542-.416-1.053-.754-1.504 1.234-.413 2.555-1.31 3.263-2.285-.758.034-1.443-.107-2.035-.428-.391-.219-.738-.437-1.077-.548-.223-.072-.471-.151-.739-.192-.07.012-.122.027-.148.037 1.185.63 2.304 1.472 2.933 2.416-.131.022-.236.025-.343.008-1.083-.286-2.037-1.136-2.385-2.211.528.117 1.076.165 1.64.137-.06-.032-.125-.05-.188-.033-.426.048-.777.164-1.048.297-.693 2.327-1.116 2.666-2.234 2.773-.305-.027-.712-.056-1.167-.074-.439-.003-1.048.008-1.32-.03-.409.436-.81 1.102-.926 1.999l-.044.205z"
                                  fill='white'/>
                                 </svg>
                            </a></li>

                     </ul>
                
                 <p className="text-center md:text-left">© {new Date().getFullYear()} Clothing Store. All rights reserved.</p>
           
            </div>
          </div>
    </footer>
  );
}

export default Footer;