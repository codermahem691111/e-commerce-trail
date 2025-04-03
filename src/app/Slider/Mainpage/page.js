import React from 'react'
import Slider1 from '../Sliders/Slider1'
import Slider2 from '../Sliders/Slider2'
import Slider3 from '../Sliders/Slider3'
function page() {
  return (
      <>   
      <div className="my-[50px] px-4">
      <h1 className="text-center text-[27px] font-[700] md:text-[24px]">Jamuna Future Park Shop</h1>
      <h2 className="text-center text-[12px] md:text-[14px] ">GA-046, Block-A, Ground Floor</h2>
      <h2 className="text-center text-[12px] md:text-[14px] mb-6">Contact # +8801896005914</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Slider1 /> {/* Assuming this uses the Swiper class */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.604801464697!2d90.42165901013263!3d23.813545986261552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e1!3m2!1sen!2sbd!4v1743069375940!5m2!1sen!2sbd"
          className="w-full max-w-[450px] h-[250px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    <div className="my-[50px] px-4">
      <h1 className="text-center text-[27px] font-[700] md:text-[24px]">Shimanto Shambhar Shopping Complex Shop</h1>
      <h2 className="text-center text-[12px] md:text-[14px] ">Dhanmondi 2, Shimanto Shomvar 1st Floor, Shop No. 1079 Dhaka, Dhaka, 1205</h2>
      <h2 className="text-center text-[12px] md:text-[14px] mb-6">Contact # +8801896005913</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Slider2 /> {/* Assuming this uses the Swiper class */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6324.901280106538!2d90.37730400000001!3d23.737613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b94d2f7a8af1%3A0xc37ff04bbc3b9c62!2sShajgoj!5e1!3m2!1sen!2sbd!4v1743073429621!5m2!1sen!2sbd"
          className="w-full max-w-[450px] h-[250px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div> 
    <div className="my-[50px] px-4">
      <h1 className="text-center text-[27px] font-[700] md:text-[24px]">Uttara Outlet (Padmanagar)</h1>
      <h2 className="text-center text-[12px] md:text-[14px] ">Shop # GB, Ground Floor, Padmanagar, 38 Sonargaon Janapath, Dhaka</h2>
      <h2 className="text-center text-[12px] md:text-[14px] mb-6">Contact # +8801896005912</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Slider3 /> {/* Assuming this uses the Swiper class */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6318.238084646136!2d90.38956!3d23.874501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5f8990f6091%3A0x931c05643f9c6c09!2sShajgoj%20Uttara%20Outlet!5e1!3m2!1sen!2sbd!4v1743073951146!5m2!1sen!2sbd"
          className="w-full max-w-[450px] h-[250px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  
   
    </>
  )
}

export default page
