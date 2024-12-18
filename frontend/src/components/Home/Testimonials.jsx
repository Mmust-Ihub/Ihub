import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../common/Loading";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAuthToken from "../../pages/admin/AuthContext";
import { toast, ToastContainer } from "react-toastify";

function Testimonials() {
  const { getItem } = useAuthToken();
  const { token } = getItem();
  const [loading, setLoading] = useState(false);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlaySpeed: 0,
    focusOnSelect: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,

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
  // console.log(import.meta.env.VITE_BACKEND_URL);
  const [testimonials, setTestimonials] = useState([]);
  const FetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        ` ${import.meta.env.VITE_BACKEND_URL}/testimonials`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const [readMore, setReadMore] = useState(0);

  useEffect(() => {
    FetchTestimonials();
  }, []);

  const handleDeleteTestimonial = async (id) => {
    if (!token) {
      alert("You need to login to delete a project");
      return;
    }
    if (window.confirm("Are you sure you want to delete this Testimonial?")) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/testimonials/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        var data = await response.json();
        if (data.status === "success") {
          toast.success("Testimonial deleted successfully");
          await FetchTestimonials();
        } else {
          console.log(data);
          toast.error(data?.status + data?.message);
        }
      } catch (error) {
        toast.error(data?.message);
        console.error("Error deleting testimonial:", error);
      }
    }
  };
  return (
    <div className="w-screen px-4 py-6 md:px-12 lg:px-20 bg-[#E0F7FA] md:mb-8 ">
      <ToastContainer />
      <h2 className="text-secondary font-bold text-2xl mt-8 mb-4">
        Testimonials
      </h2>

      {loading ? (
        <Loading text={"Loading Testimonials"} />
      ) : (
        <Slider {...settings}>
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="shadow-3xl shadow-black overflow-ellipsis justify-center items-center flex text-black p-1"
            >
              <div className="bg-white  h-[220px] gap-2 px-2 py-2 rounded-2xl flex flex-row items-start justify-start space-x-2 mx-2 overflow-clip">
                <div className="">
                  <img
                    src={testimonial.imageUrl}
                    alt="person image"
                    className="rounded-full object-cover w-[50px] h-[50px] object-top"
                  />
                </div>
                <div className="w-full flex-1">
                  <span className="w-full text-black  font-semibold">
                    {testimonial.name}
                  </span>
                  <span className="font-semibold w-full italic text-black ">
                    , {testimonial.occupation}
                  </span>
                  <p className="p-4 w-full">{testimonial.message}</p>
                </div>
              </div>
              {token && (
                <p
                  className="w-full text-center flex items-end justify-end  px-2 py-2 text-red-500 hover:cursor-pointer"
                  onClick={() => {
                    handleDeleteTestimonial(testimonial?._id);
                  }}
                >
                  Delete <RiDeleteBin6Line className="text-red-500 text-xl " />
                </p>
              )}
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Testimonials;
