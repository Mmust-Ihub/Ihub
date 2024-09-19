import React from "react";
import img from "../../assets/person1.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    id: 1,
    parentName: "Wanjiku Muthoni",
    role: "parent",
    testimonial:
      "The website development team at MMUST iHub transformed our online store into a sleek, user-friendly platform. The professional design and advanced features have significantly improved our customer engagement and sales.",
  },
  {
    id: 2,
    parentName: "Maina Gitonga",
    role: "parent",
    testimonial:
      "The website development team at MMUST iHub transformed our online store into a sleek, user-friendly platform. The professional design and advanced features have significantly improved our customer engagement and sales.",
  },
  {
    id: 3,
    parentName: "Wangari Chepkorir",
    role: "parent",
    testimonial:
      "The website development team at MMUST iHub transformed our online store into a sleek, user-friendly platform. The professional design and advanced features have significantly improved our customer engagement and sales.",
  },
  {
    id: 4,
    parentName: "Kariuki Omondi",
    role: "parent",
    testimonial:
      "The website development team at MMUST iHub transformed our online store into a sleek, user-friendly platform. The professional design and advanced features have significantly improved our customer engagement and sales.",
  },
];

function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 0,
    focusOnSelect: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10009,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen px-4 py-6 md:px-12 lg:px-20 bg-[#E0F7FA] md:mb-8">
      <h2 className="text-secondary font-bold text-2xl mt-4 mb-4">
        Testimonials
      </h2>

      <Slider {...settings}>
        {testimonials?.map((testimonial, index) => (
          <div
            key={index}
            className="shadow-3xl shadow-black justify-center items-center flex text-black p-1"
          >
            <div className="bg-white px-6 py-4 rounded-2xl flex flex-row items-start justify-start space-x-4 mx-2">
              <div className="w-[200px]">
                <img
                  src={img}
                  alt="person image"
                  className=" rounded-full object-contain w-[150px]"
                />
              </div>
              <div>
                <span className="w-full text-black  font-semibold">
                  {testimonial.parentName}
                </span>
                <span className="font-semibold w-full italic text-black ">
                  , {testimonial.role}
                </span>
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
