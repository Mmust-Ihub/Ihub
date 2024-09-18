import React from "react";

function Main() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center bg-white px-6 lg:px-24 py-8"
      id="main"
    >
      <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
        Make an inquiry or Partner with us
      </h2>
      <div className="w-full grid h-[00px grid-cols-1 lg:grid-cols-2 gap-8">
        <div className=" flex  flex-col  gap-4 space-y-4 px-4 py-8 bg-[#E0F7FA] w-full items-center rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-secondary">
            Get in touch with us
          </h3>
          <ul className="space-y-8 text-black">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-tersiary w-6 h-6"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="truncate">Kakamega, Kenya</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-tersiary w-6 h-6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="truncate">
                <a href={`tel:+254798675706`}>+254798675706</a>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-tersiary w-6 h-6"
              >
                <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                <polyline points="15,9 18,9 18,11"></polyline>
                <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
                <line x1="6" x2="7" y1="10" y2="10"></line>
              </svg>
              <span className="truncate">
                <a href={`mailto:info@ihub.mmust.ac.ke`}>
                  info@ihub.mmust.ac.ke
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className=" flex  flex-col  gap-4 space-y-4 px-4 lg:px-12 py-8 bg-[#E0F7FA] w-full items-center justify-center rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-secondary">
            Feel Free to write to us
          </h3>
          <form action="" className="w-full flex flex-col gap-4">
            <input
              type="text"
              name=""
              id=""
              className="text-black rounded-lg px-2 h-[40px] w-full outline-green-500 border-gray-400 border-[1px]"
              required
              placeholder="Name..."
            />
            <input
              type="email"
              name=""
              id=""
              className="text-black rounded-lg px-2 h-[40px] w-full outline-green-500 border-gray-400 border-[1px]"
              required
              placeholder="Email..."
            />
            <input
              type="tel"
              name=""
              id=""
              className="text-black rounded-lg px-2 h-[40px] w-full outline-green-500 border-gray-400 border-[1px]"
              required
              placeholder="Phone Number..."
            />
            <textarea
              name=""
              id=""
              className="text-black rounded-lg px-2 h-[80px] w-full outline-green-500 border-gray-400 border-[1px]"
              required
              placeholder="Message..."
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="bg-secondary px-[60px] text-center py-2 rounded-[60px] text-white font-[500] hover:opacity-75 mt-[20px] w-full 
            lg:w-[50%] shadow-xl self-end"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
