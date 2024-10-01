import React from "react";
// import map from "../../assets/contact/image.webp";

function LiveLocationMap() {
  return (
    <div className="w-screen flex flex-col justify-center items-center px-6 lg:px-24 py-8 pb-[180px]">
      <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
        Live Location
      </h2>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7979.532640936573!2d34.75321287770997!3d0.29252480000002135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1727779275738!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border:0}}
          allowfullscreen=""
          loading="lazy"
          title="map"
          
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default LiveLocationMap;
