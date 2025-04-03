"use client"
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterest, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white container mx-auto px-4">
      {/* Main Footer */}
      <div className=" py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h2 className="text-2xl font-bold mb-6">SHAJGOJ</h2>
            <ul className="space-y-2">
              <li><Link href="/Footerex/Story" className="hover:text-pink-500">OUR STORY</Link></li>
              <li><Link href="/Footerpages/mag" className="hover:text-pink-500">SHAJGOJ MAGAZINE</Link></li>
              <li><Link href="/Slider/Mainpage" className="hover:text-pink-500">SHAJGOJ OUTLETS</Link></li>
              <li><Link href="/Footerex/hr" className="hover:text-pink-500">JOIN OUR TEAM</Link></li>
              <li><Link href="/Footerex/Auth" className="hover:text-pink-500">AUTHENTICITY</Link></li>
            </ul>
            
            <div className="mt-6">
              <h3 className="mb-4">SHARE YOUR LOVE</h3>
              <div className="flex space-x-4">
                <Link href="#" className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-pink-500 hover:text-white">
                  <FaFacebookF />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-pink-500 hover:text-white">
                  <FaTwitter />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-pink-500 hover:text-white">
                  <FaYoutube />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-pink-500 hover:text-white">
                  <FaInstagram />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-pink-500 hover:text-white">
                  <FaPinterest />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Top Categories */}
          <div>
            <h3 className="text-pink-500 font-bold mb-4">TOP CATEGORIES</h3>
            <ul className="space-y-2">
              <li><Link href="/Cartpage" className="hover:text-pink-500">MAKEUP</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">SKIN</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">EYE CARE</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">HAIR</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">PERSONAL CARE</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">NATURAL</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">MOM & BABY</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-pink-500 font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/Cartpage" className="hover:text-pink-500">OFFERS</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">MENS PRODUCTS</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">SKIN CONCERNS</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">NEW ARRIVAL</Link></li>
              <li><Link href="/Cartpage" className="hover:text-pink-500">MAKEUP</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Beauty & Help */}
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-pink-500 font-bold mb-4">ALL ABOUT BEAUTY</h3>
              <ul className="space-y-2">
                <li><Link href="/Cartpage" className="hover:text-pink-500">KNOW YOUR ROUTINE</Link></li>
                <li><Link href="/Cartpage" className="hover:text-pink-500">HAIR CARE 101</Link></li>
                <li><Link href="/Cartpage" className="hover:text-pink-500">SKIN CARE 101</Link></li>
                <li><Link href="/Cartpage" className="hover:text-pink-500">MAKEUP 101</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-pink-500 font-bold mb-4">HELP</h3>
              <ul className="space-y-2">
                <li><Link href="/Footerpages/Contact" className="hover:text-pink-500">CONTACT US</Link></li>
                <li><Link href="/Footerpages/Points" className="hover:text-pink-500">POINTS</Link></li>
                <li><Link href="/Footerpages/FAQ" className="hover:text-pink-500">FAQS</Link></li>
                <li><Link href="/Footerpages/Ship" className="hover:text-pink-500">SHIPPING & DELIVERY</Link></li>
                <li><Link href="/Footerpages/Terms" className="hover:text-pink-500">TERMS & CONDITIONS</Link></li>
                <li><Link href="/Footerpages/Refund" className="hover:text-pink-500">REFUND & RETURN POLICY</Link></li>
                <li><Link href="/" className="hover:text-pink-500">TRADE LICENSE</Link></li>
                <li><Link href="/Footerpages/Privacy" className="hover:text-pink-500">PRIVACY POLICY</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-2">PAYMENTS ACCEPTED</h3>
              <div className="flex space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa payment method" className="h-8 bg-white p-1 rounded" />
                <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="MasterCard payment method" className="h-8 bg-white p-1 rounded" />
                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="American Express payment method" className="h-8 bg-white p-1 rounded" />
                <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal payment method" className="h-8 bg-white p-1 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer Bar - With improved responsiveness */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mb-4 md:mb-0">
              <Link href="/authenticity" className="text-xs sm:text-sm hover:text-pink-500 px-2 py-1">AUTHENTICITY</Link>
              <Link href="/terms" className="text-xs sm:text-sm hover:text-pink-500 px-2 py-1">TERMS & CONDITIONS</Link>
              <Link href="/privacy" className="text-xs sm:text-sm hover:text-pink-500 px-2 py-1">PRIVACY POLICY</Link>
              <Link href="/refund" className="text-xs sm:text-sm hover:text-pink-500 px-2 py-1">REFUND & RETURN</Link>
              <Link href="/faqs" className="text-xs sm:text-sm hover:text-pink-500 px-2 py-1">FAQS</Link>
            </div>
            <div className="text-xs sm:text-sm text-center md:text-right">
              Copyright © 2025 Shajgoj Limited. All Right Reserved
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed right-6 bottom-6">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white hover:bg-pink-600"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;