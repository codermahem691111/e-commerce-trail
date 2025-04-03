import React from 'react';

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10713.434309145965!2d89.10206463677603!3d22.343010726709775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1743052343196!5m2!1sen!2sbd"
        className='h-[380px] w-[380px]'
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      {/* Additional HTML converted to React JSX */}
      <div className="map-info">
        <h2 className="text-xl font-bold mt-4">Our Location</h2>
        <p className="text-gray-600">
          Visit us at our office or contact us for more details.
        </p>
      </div>
    </div>
  );
}

export default Map;
