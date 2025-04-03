import Image from 'next/image';
import Image1 from '../../assets/mg1.jpg'
import Image2 from '../../assets/mgch.png'
const PhotoGallery = () => {
  return (
    <div className="container mx-auto py-8 px-4">
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Magazine Cover */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={Image1} // Replace with the actual path to your first image
            alt="Shagjoj Magazine - Nusrat Faria"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Second Magazine Cover */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={Image2} // Replace with the actual path to your second image
            alt="Shagjoj Magazine - Shubhashree Ganguly"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;