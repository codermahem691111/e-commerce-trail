import React from 'react';
import { FaCheck, FaSprayCan, FaStar, FaComments } from 'react-icons/fa';

const DownSection = () => {
  return (
    <section className="bg-purple-700 py-8 container mx-auto px-4">
      <div className="">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
          
          {/* Feature 1: 100% Authentic Products */}
          <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
            <div className="flex items-center">
              <div className="bg-pink-500 text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
                <FaCheck className="text-2xl" />
              </div>
              <div className="ml-4 text-white">
                <div className="text-2xl font-bold">100%</div>
                <div className="uppercase text-sm tracking-wider">
                  <div>AUTHENTIC</div>
                  <div>PRODUCTS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 2: 15000+ Beauty Products */}
          <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
            <div className="flex items-center">
              <div className="bg-pink-500 text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
                <FaSprayCan className="text-2xl" />
              </div>
              <div className="ml-4 text-white">
                <div className="text-2xl font-bold">15000+</div>
                <div className="uppercase text-sm tracking-wider">
                  <div>BEAUTY</div>
                  <div>PRODUCTS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 3: 400+ Exclusive Brands */}
          <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
            <div className="flex items-center">
              <div className="bg-pink-500 text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
                <FaStar className="text-2xl" />
              </div>
              <div className="ml-4 text-white">
                <div className="text-2xl font-bold">400+</div>
                <div className="uppercase text-sm tracking-wider">
                  <div>EXCLUSIVE</div>
                  <div>BRANDS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 4: Free Beauty Consultation */}
          <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
            <div className="flex items-center">
              <div className="bg-pink-500 text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
                <FaComments className="text-2xl" />
              </div>
              <div className="ml-4 text-white">
                <div className="text-2xl font-bold">FREE</div>
                <div className="uppercase text-sm tracking-wider">
                  <div>BEAUTY</div>
                  <div>CONSULTATION</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DownSection;