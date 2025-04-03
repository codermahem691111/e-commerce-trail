import Image from 'next/image';
import Sw1 from '../assets/sw1.webp';
import Sw2 from '../assets/sw2.webp';
import Sw3 from '../assets/sw3.webp';
import Sw4 from '../assets/sw4.webp';
import Link from 'next/link';
const products = [
  {
    id: 1,
    title: "Tresemme Conditioner Keratin Smooth 190ml",
    price: "240.00",
    oldPrice: "320.00",
    discount: "25% OFF",
    volume: "190ml",
    image: Sw1, // ✅ Directly assigning the image
  },
  {
    id: 2,
    title: "Tresemme Shampoo Keratin Smooth 580ml",
    price: "549.00",
    oldPrice: "850.00",
    discount: "35% OFF",
    volume: "580ml",
    image: Sw2,
  },
  {
    id: 3,
    title: "Dove Conditioner Intense Repair 170ml",
    price: "219.00",
    oldPrice: "290.00",
    discount: "24% OFF",
    volume: "170ml",
    image: Sw3,
  },
  {
    id: 4,
    title: "Sunsilk Shampoo Lusciously Thick & Long 650ml",
    price: "525.00",
    oldPrice: "700.00",
    discount: "25% OFF",
    volume: "650ml",
    image: Sw4,
  },
];

export default function ProductGrid() {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 relative">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
            <Image
              src={product.image} // ✅ Using the correct image property
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-red-600">৳ {product.price}</span>
              <span className="text-sm line-through text-gray-500">৳ {product.oldPrice}</span>
            </div>
            <span className="text-xs text-gray-500">{product.volume}</span>
            <Link href="/Product">
           <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
              ADD TO CART
            </button>
           </Link>
          </div>
        ))}
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 relative">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
            <Image
              src={product.image} // ✅ Using the correct image property
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-red-600">৳ {product.price}</span>
              <span className="text-sm line-through text-gray-500">৳ {product.oldPrice}</span>
            </div>
            <span className="text-xs text-gray-500">{product.volume}</span>
           <Link href="/Product">
           <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
              ADD TO CART
            </button>
           </Link> 
          </div>
        ))}
      </div>
    </div>
  </>
  );
}
