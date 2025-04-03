"use client";
import { useState } from "react";
import Image from "next/image";
import productImage from "../assets/sw1.webp"; // Replace with actual image path
import ProductGrid from "../Cartpage/page";

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
  
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => quantity > 1 && setQuantity(quantity - 1);
  
    const tabs = [
      { id: "description", label: "DESCRIPTION" },
      { id: "ingredients", label: "INGREDIENTS" },
      { id: "how-to-use", label: "HOW TO USE" },
      { id: "reviews", label: "REVIEWS (89)" },
      { id: "qa", label: "Q&A (7)" },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Product Image */}
          <div className="lg:w-1/2">
            <Image
              src={productImage}
              alt="Product"
              width={500}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Side - Product Details */}
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">
              Parachute Naturale Nourishing Care Shampoo
            </h1>
  
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">4.1 ★ | 89 Reviews</span>
            </div>
  
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-2xl font-bold">৳99.00</span>
              <span className="line-through text-gray-500">৳140.00</span>
              <span className="text-sm bg-purple-500 text-white px-2 py-1 rounded">29% OFF</span>
            </div>
  
            <p className="text-gray-600">Save ৳41.00</p>
  
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <button
                onClick={decrement}
                className="px-3 py-1 bg-gray-300 rounded text-xl"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={increment}
                className="px-3 py-1 bg-gray-300 rounded text-xl"
              >
                +
              </button>
            </div>
  
            {/* Add to Cart Button */}
            <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">
              ADD TO CART
            </button>
          </div>
        </div>
  
        {/* Tabs Section */}
        <div className="mt-8">
          {/* Centered Tabs with Proper Text Alignment */}
          <div className="flex justify-center space-x-2 border-b pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold flex justify-center items-center text-center rounded-md transition ${
                  activeTab === tab.id
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
  
          {/* Tab Content */}
          <div className="mt-4 text-gray-700">
            {activeTab === "description" && (
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Enriched with Natural Ingredients:</strong> Infused with Coconut Milk and Aloe Vera for nourishment.</li>
                <li><strong>Goodness of Milk Protein & Aloe Vera:</strong> Reduces dryness and frizz.</li>
                <li><strong>Free from Harmful Additives:</strong> Paraben-free formula.</li>
                <li><strong>100% Vegan:</strong> Cruelty-free hair care product.</li>
                <li><strong>Dermatologically Tested:</strong> Safe for all hair types.</li>
              </ul>
            )}
  
            {activeTab === "ingredients" && (
              <p>Coconut Milk, Aloe Vera, Water, Vitamin E, Essential Oils, Mild Cleansers.</p>
            )}
  
            {activeTab === "how-to-use" && (
              <p>Apply a small amount to wet hair, massage into scalp, and rinse thoroughly.</p>
            )}
  
            {activeTab === "reviews" && (
              <p>⭐⭐⭐⭐⭐ "Great product! My hair feels so soft!" - Customer Review</p>
            )}
  
            {activeTab === "qa" && (
              <p><strong>Q:</strong> Is this shampoo suitable for curly hair? <br /> <strong>A:</strong> Yes, it's suitable for all hair types.</p>
            )}
          </div>
        </div>
        <ProductGrid/>
      </div>
    );
  }