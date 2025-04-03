import Head from "next/head";
import Image from "next/image"; // Import the Image component
import Image1 from '../../assets/nazmul.webp'
import Image2 from '../../assets/sinthiya.webp'
import Image3 from '../../assets/milky.webp'
import ch1 from '../../assets/1.webp'
import ch2 from '../../assets/2.webp'
import ch3 from '../../assets/3.webp'
import ch4 from '../../assets/4.webp'
import ch5 from '../../assets/5.webp'
import ch6 from '../../assets/6.webp'
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Beauty Mission</title>
        <meta name="description" content="Inspiring women to be their true selves" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
        {/* Our Mission Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
            Our Mission
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to inspire women to be inspirational, to look beautiful, to feel confident and empowered.
          </p>
        </section>

        {/* Our Stories Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
            Our Stories
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Everyone is beautiful, doesn’t really matter who you are! You’re beautiful, when you’re happy. You’re happy when you appreciate your true self. Pretty face is just a small part of a woman’s personality. Your own self is the sum of your education, intelligence, sense of humour, body language, etiquette and your charm! Shagjo! will assist you in finding your true self.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            We are the experts when it comes to your beauty needs. We provide true reviews and authentic products, no replicas, no duplicates! You’re not only special to yourself, you’re also special to us.
          </p>
        </section>

        {/* Our Team Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 uppercase">
            Our Team
          </h1>

          {/* Team Member 1 */}
          <div className="flex items-center mb-8">
            <div className="w-24 h-24 mr-6 relative flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={Image1}  // Replace with actual image path
                  alt="Nazmul Sheikh"
                  layout="fill" // Use fill layout to make the image fill the container
                  objectFit="cover" // Ensure the image covers the container while maintaining aspect ratio
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Nazmul Sheikh, CEO & Co-Founder
              </h2>
              <p className="text-gray-600 leading-relaxed">
                EEE graduate from BUET (Bangladesh University of Engineering and Technology). Before launching Shagjo!, he worked for major telecom operator MTN as a technology consultant in Nigeria.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex items-center mb-8">
            <div className="w-24 h-24 mr-6 relative flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={Image2} // Replace with actual image path
                  alt="Sintha Sharmim Islam"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Sintha Sharmim Islam, CCO & Co-Founder
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A pharmacy graduate by qualification, she overlooks content especially around beauty and makeup, she also advises customers on right makeup for the right skin at their retail stores. She has experience in managing community and beauty supply, Medplus in Nigeria.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex items-center">
            <div className="w-24 h-24 mr-6 relative flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={Image3} // Replace with actual image path
                  alt="Miky Mahamud"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Miky Mahamud, COO & Co-Founder
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A CS graduate from IUT. Before co-founding Shagjo!, he was consulting for Ericsson Global as a telecom consultant, having worked in various cities in Africa.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 uppercase">
            Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="relative w-full h-64">
              <Image
                src={ch1} // Replace with actual image path
                alt="Gallery Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Image 2 */}
            <div className="relative w-full h-64">
              <Image
                src={ch2} // Replace with actual image path
                alt="Gallery Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Image 3 */}
            <div className="relative w-full h-64">
              <Image
                src={ch3}  // Replace with actual image path
                alt="Gallery Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Image 4 */}
            <div className="relative w-full h-64">
              <Image
                src={ch4} // Replace with actual image path
                alt="Gallery Image 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Image 5 */}
            <div className="relative w-full h-64">
              <Image
                src={ch5} // Replace with actual image path
                alt="Gallery Image 5"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Image 6 */}
            <div className="relative w-full h-64">
              <Image
                src={ch6} // Replace with actual image path
                alt="Gallery Image 6"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}