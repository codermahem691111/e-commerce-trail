"use client "
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Image1 from "../assets/card1.jpg"; 
import Image2 from "../assets/card2.jpg"; 
import Image3 from "../assets/card3.jpg";
import Image4 from "../assets/card4.jpg";
import Image5 from "../assets/card5.jpg";
import Image6 from "../assets/card6.jpg"; 
import Image7 from "../assets/card7.jpg";
import Image8 from "../assets/card8.jpg";     
const ShopByConcern = () => {
  const concerns = [
    {
      id: 1,
      title: 'ACNE',
      subtitle: 'TREATMENT',
      image: Image1,
      link: '/concerns/acne'
    },
    {
      id: 2,
      title: 'ANTI AGING',
      subtitle: 'TREATMENT',
      image:Image2 ,
      link: '/concerns/anti-aging'
    },
    {
      id: 3,
      title: 'DANDRUFF',
      subtitle: 'SOLUTION',
      image: Image3, 
      link: '/concerns/dandruff'
    },
    {
      id: 4,
      title: 'DRY SKIN',
      subtitle: 'TREATMENT',
      image: Image4  ,
      link: '/concerns/dry-skin'
    },
    {
      id: 5,
      title: 'HAIR FALL',
      subtitle: 'TREATMENT',
      image:Image5, 
      link: '/concerns/hair-fall'
    },
    {
      id: 6,
      title: 'OIL CONTROL',
      subtitle: 'TREATMENT',
      image: Image6,
      link: '/concerns/oil-control'
    },
    {
      id: 7,
      title: 'PORE',
      subtitle: 'CARE',
      image: Image7,
      link: '/concerns/pore-care'
    },
    {
      id: 8,
      title: 'SPOT',
      subtitle: 'TREATMENT',
      image: Image8 ,
      link: '/concerns/spot'
    }
  
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">SHOP BY CONCERN</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {concerns.map((concern) => (
            <Link href={concern.link} key={concern.id}>
                <div className="bg-pink-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 w-[180px] relative overflow-hidden">
      {/* Hexagonal Image Container with z-index to keep it on top */}
      <div className="relative w-full h-28 bg-gradient-to-r from-pink-400 to-pink-500 flex justify-center">
        <div className="absolute -bottom-8 z-10 w-31 h-31 flex items-center justify-center">
          {/* Hexagonal Border */}
          <div
            className="w-31 h-31 bg-white flex items-center justify-center"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            {/* Hexagonal Image Inside */}
            <div
              className="w-27 h-27 overflow-hidden"
              style={{
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <Image
                src={concern.image}
                alt={concern.title}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Section with z-index LOWER than the image */}
      <div className="relative bg-pink-100 pt-14 pb-4 text-center rounded-b-2xl z-0">
        {/* SVG Curve */}
        <svg
          className="absolute -top-5 left-0 w-full z-0"
          viewBox="0 0 200 20"
          preserveAspectRatio="none"
        >
          <path d="M0,20 C50,0 150,0 200,20 L200,20 L0,20 Z" fill="#FCE4EC" />
        </svg>

        <h3 className="text-pink-500 text-sm font-bold">{concern.title}</h3>
        <p className="text-xs text-pink-500">{concern.subtitle}</p>
      </div>
    </div>        
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByConcern;