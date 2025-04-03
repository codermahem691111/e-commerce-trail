import Image from 'next/image';
import Hr from '../../assets/hr1.jpg' 


const JobPosting = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Job Posting Div */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          POSITION: EXECUTIVE - SHOPPING EXPERIENCE DESIGN
        </h1>

        {/* Application Deadline */}
        <p className="text-lg text-gray-600 mb-4">
          <span className="font-semibold">APPLICATION DEADLINE:</span> 15TH JANUARY, 2025
        </p>

        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          We are seeking dynamic and creative individuals to join our Shopping Experience Design Team as an "EXECUTIVE".
        </p>

        {/* Salary and Benefits */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">SALARY & BENEFITS</h2>
          <p className="text-gray-700">
            <span className="font-semibold">SALARY:</span> BDT 20,000/- TO 25,000/- (Based on experience)
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">WORKING DAYS:</span> 5 DAYS (IN A WEEK)
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">BONUS:</span> 2 FESTIVAL BONUS (IN A YEAR)
          </p>
        </div>

        {/* Job Responsibilities */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">JOB RESPONSIBILITIES</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Creative thinking for product photoshoots and short videos.</li>
            <li>Experiment with props, backgrounds, and settings to create thematic setups that tell a story related to the product.</li>
            <li>Maintain Shagjoj Website and App content.</li>
            <li>Explore AI tools to enhance product photos, automate design workflows, and analyze visual trends for better audience engagement.</li>
          </ul>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">REQUIREMENTS</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold">Education:</span> Graduate in any discipline.</li>
            <li><span className="font-semibold">Writing Skills:</span> Good writing skills to craft clear, concise, and engaging responses to customer reviews.</li>
            <li><span className="font-semibold">Composition Skills:</span> Arrange products creatively, considering balance, symmetry, and focal points.</li>
            <li><span className="font-semibold">AI Enthusiasm:</span> Demonstrate enthusiasm and a strong passion for working with AI tools and technologies.</li>
            <li><span className="font-semibold">Experience:</span> Freshers can be encouraged to apply. However, an added advantage is 1-2 years of experience in a respected field.</li>
          </ul>
        </div>

        {/* Additional Requirements */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">ADDITIONAL REQUIREMENTS</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Excellent language and writing skills in both Bangla and English.</li>
            <li>Communicate effectively with the photography team, ensuring every design aligns with the creative direction and goals of the project.</li>
            <li>Collaborate with post-production teams to provide guidance on the desired edits and enhancements for the final product images.</li>
            <li>Continuously experiment with lighting techniques to improve and innovate the photography process.</li>
            <li>Being adaptable to different environments, such as studio settings or on-location shoots.</li>
          </ul>
        </div>

        {/* Instruction to Apply */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">INSTRUCTION TO APPLY</h2>
          <p className="text-gray-700">
            Interested meeting the requirements are requested to forward their resumes to{" "}
            <a href="mailto:career@shagjoj.com" className="text-blue-600 hover:underline">
              career@shagjoj.com
            </a>
          </p>
          <p className="text-gray-700">
            (Mention "EXECUTIVE - SHOPPING EXPERIENCE DESIGN" in the subject line of your email).
          </p>
        </div>

        {/* Application Deadline (Repeated) */}
        <p className="text-lg text-gray-600 mb-4">
          <span className="font-semibold">APPLICATION DEADLINE:</span> 15TH JANUARY, 2025
        </p>

        {/* Job Location */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">JOB LOCATION</h2>
          <p className="text-gray-700">
            Opposite to Jamuna Future Park, Agerion S Nather, Ka 207/1, Kuril Pragati Sarani, Dhaka 1229.
          </p>
        </div>
      </div>

      {/* Image Div */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Featured Magazine Cover
        </h2>
        <div className="flex justify-center">
          {/* Single Image */}
          <div className="relative w-[398px] h-[398px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Hr} // Replace with the actual path to your image
              alt="Shagjoj Magazine - Nusrat Faria"
              width={398}
              height={398}
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;