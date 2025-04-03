import Image from "next/image";
import Image1 from "../assets/c1.webp";
import Image2 from "../assets/c2.webp";
import Image3 from "../assets/c3.webp";
import Image4 from "../assets/c4.webp";
import Image5 from "../assets/c5.webp";
import Image6 from "../assets/c6.webp";
import Image7 from "../assets/c7.webp";
import Image8 from "../assets/c8.webp";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

export default function CategoryGrid() {
  return (
    <section className="p-6 container px-4 mx-auto">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
        SHOP BEAUTY PRODUCTS BY CATEGORY
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className={`w-full ${index >= 4 ? "hidden md:block" : ""}`}>
            <Image src={src} alt={`Category ${index + 1}`} width={300} height={300} className="rounded-xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
