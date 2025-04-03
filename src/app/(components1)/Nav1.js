'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categoriesData } from  './Catagories'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdownMenu, setActiveDropdownMenu] = useState('');
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdownMenu = (category) => {
    if (activeDropdownMenu === category) {
      setActiveDropdownMenu('');
    } else {
      setActiveDropdownMenu(category);
    }
  };

  const toggleMobileSubmenu = (category) => {
    if (activeMobileSubmenu === category) {
      setActiveMobileSubmenu('');
    } else {
      setActiveMobileSubmenu(category);
    }
  };

  // Categories with special styling
  const specialCategories = {
    'UNDERGARMENTS': 'bg-blue-600 text-white px-3 rounded-full',
    'EID GIGA SALE': 'bg-pink-500 text-white px-3 rounded-full',
    'JEWELLERY': 'bg-purple-500 text-white px-3 rounded-full',
    'CLEARANCE SALE': 'bg-teal-500 text-white px-3 rounded-full',
    'MEN': 'bg-green-500 text-white px-3 rounded-full'
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="hidden md:block bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-4xl font-[700]">SHAJGOJ</Link>
            <div className="ml-4 flex items-center">
              <Link href="/brands" className="mr-4 font-[400] text-[18px] text-center">BRANDS</Link>
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="Search for Products, Brands..."
                  className="w-full rounded-full border-2 border-pink-500 py-2 pl-10 pr-4 focus:outline-none text-center"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/wishlist" className="px-3 py-3.5 bg-gray-900 text-white text-xs font-bold rounded-full text-center flex items-center justify-center">WISHLIST</Link>
              <Link href="/Login" className="px-3 py-3.5 text-xs font-bold text-center">LOGIN</Link>
              <Link href="/cart" className="relative">
                <div className="p-2 bg-pink-500 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="absolute -top-1 -right-1 bg-white text-pink-500 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">0</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Desktop Categories - Centered with Reduced Spacing */}
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-2">
              <div className="flex space-x-3">
                {/* Map through categories for desktop view */}
                {Object.keys(categoriesData).map((category) => (
                  <div key={category} className="relative group">
                    <button 
                      className={`py-2.5 text-xs font-medium text-center ${specialCategories[category] || ''}`}
                      onClick={() => toggleDropdownMenu(category)}
                      onMouseEnter={() => setActiveDropdownMenu(category)}
                      onMouseLeave={() => setActiveDropdownMenu('')}
                    >
                      {category}
                    </button>
                    
                    {/* Dropdown Menu for each category */}
                    <div 
                      className={`absolute left-0 top-full z-50 bg-white shadow-lg w-screen ${activeDropdownMenu === category ? 'block' : 'hidden'}`}
                      onMouseEnter={() => setActiveDropdownMenu(category)}
                      onMouseLeave={() => setActiveDropdownMenu('')}
                    >
                      <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-7 gap-6">
                          {Object.keys(categoriesData[category]).map((subCategory) => (
                            <div key={subCategory} className="mb-4">
                              <h3 className="font-bold text-sm mb-2">{subCategory}</h3>
                              <ul>
                                {categoriesData[category][subCategory].map((item) => (
                                  <li key={item.name} className="mb-1">
                                    <Link href={item.link} className="text-gray-700 hover:text-pink-500 text-xs">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-white shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <button onClick={toggleMenu} className="p-1.5 rounded-full flex items-center justify-center">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/" className="text-2xl font-bold text-center">SHAJGOJ</Link>
          <div className="w-5"></div> {/* Empty div for alignment */}
        </div>
        <div className="px-4 py-2 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Products, Brands..."
              className="w-full rounded-full border-2 border-pink-500 py-2 pl-10 pr-4 focus:outline-none text-sm text-center"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="text-blue-600 text-sm text-center">Menu</div>
            <button onClick={toggleMenu} className="text-pink-500 p-1 rounded-full flex items-center justify-center">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-center py-3 border-b border-gray-100">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-3">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <Link href="/login" className="text-gray-800 text-sm text-center">Login</Link>
            </div>
            
            {/* Map through categories for mobile view */}
            {Object.keys(categoriesData).map((category) => (
              <div key={category} className="py-1 border-b border-gray-100">
                <div className="flex items-center justify-between py-2">
                  <div className="text-gray-800 text-sm">{category}</div>
                  <button 
                    onClick={() => toggleMobileSubmenu(category)}
                    className="text-blue-600 text-sm rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {activeMobileSubmenu === category ? '-' : '+'}
                  </button>
                </div>
                
                {/* Category Subcategories for Mobile */}
                {activeMobileSubmenu === category && (
                  <div className="pl-4 pb-2">
                    {Object.keys(categoriesData[category]).map((subCategory) => (
                      <div key={subCategory} className="mb-3">
                        <div className="flex items-center justify-between py-1">
                          <div className="text-gray-700 font-medium text-sm">{subCategory}</div>
                          <button 
                            onClick={() => toggleMobileSubmenu(`${category}-${subCategory}`)}
                            className="text-blue-600 text-sm rounded-full w-5 h-5 flex items-center justify-center"
                          >
                            {activeMobileSubmenu === `${category}-${subCategory}` ? '-' : '+'}
                          </button>
                        </div>
                        
                        {activeMobileSubmenu === `${category}-${subCategory}` && (
                          <ul className="pl-3">
                            {categoriesData[category][subCategory].map((item) => (
                              <li key={item.name} className="py-1">
                                <Link href={item.link} className="text-gray-600 text-xs">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}