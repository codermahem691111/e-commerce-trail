import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Image1 from '../assets/Home.jpg';
import Image2 from '../assets/Shop Now.jpg';
import Image3 from '../assets/4.jpg';
import Image4 from '../assets/5.jpg';
import Image5 from '../assets/3.jpg';
import Image6 from '../assets/hero2.jpg';

const BrandsOfferSection = () => {
  const imageData = [
    { src: Image1, discount: "17% OFF" },
    { src: Image2, discount: "50% DISCOUNT" },
    { src: Image3, discount: "34% OFF" },
    { src: Image4, discount: "30% OFF" },
    { src: Image5, discount: "26% OFF" },
    { src: Image6, discount: "15% OFF" },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-xl font-semibold my-4">
        TOP BRANDS & OFFERS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageData.map((item, index) => (
          <div 
            key={index} 
            className="relative bg-white shadow-md rounded-lg overflow-hidden h-[250px]"
          >
            <Image
              src={item.src}
              alt={`Brand offer ${index + 1}`}
              width={400}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded-md">
              {item.discount}
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default BrandsOfferSection;