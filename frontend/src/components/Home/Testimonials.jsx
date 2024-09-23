import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";


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
  const [testimonials, setTestimonials] = useState([]);
  const FetchTestimonials = async () => {
    try {
      const response = await fetch(
        "https://ihub-mu.vercel.app/api/v1/testimonials",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTestimonials(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  const [readMore, setReadMore] = useState(0);

  useEffect(() => {
    FetchTestimonials();
  }, []);
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
                  src={testimonial.imageUrl}
                  alt="person image"
                  className=" rounded-full object-cover w-[150px]"
                />
              </div>
              <div>
                <span className="w-full text-black  font-semibold">
                  {testimonial.name}
                </span>
                <span className="font-semibold w-full italic text-black ">
                  , {testimonial.occupation}
                </span>
                <p>{readMore !== index ? testimonial.message.slice(0, 200) + "...": testimonial.message}</p>
                <div className="w-full flex justify-end mt-1">
                  {
                    readMore !== index ? (
                      <button
                        onClick={() => setReadMore(index)}
                        className="text-primary font-semibold"
                      >
                        Read More
                      </button>
                    ) : (
                      <button
                        onClick={() => setReadMore(-1)}
                        className="text-primary font-semibold"
                      >
                        show Less
                      </button>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
