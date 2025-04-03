import Image from "next/image";
import Image1 from '../assets/lc1.webp';
import Image2 from '../assets/lc2.webp';
import Image3 from '../assets/lc3.gif';
import Image4 from '../assets/lc4.webp';

const PhotoCards = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className="container mx-auto px-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center my-6">
        Deals You Can't Miss
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={img}
              alt={`Photo card ${index + 1}`}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCards;
