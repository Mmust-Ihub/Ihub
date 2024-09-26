import React from "react";

function Main() {
  return (
    <div className="w-screen pb-[220px] flex flex-col justify-center items-center px-4 lg:px-24 py-8">
      <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
        Choose Your Donation
      </h2>
      <div className="w-full flex flex-col gap-4 justify-start items-start">
        <div className="w-full flex flex-col lg:flex-row gap-4 px-4 py-2 ">
          <h3 className=" text-black font-semibold text-2xl mt-2 mb-2">
            1. Donate Via M-Pesa
          </h3>
          {/* <h5>Toogle Currency</h5>
        <div>
          <button>KSH</button>
          <button>USD</button>
        </div> */}
          <form
            action=""
            className="flex flex-col gap-4 w-full lg:w-[40%] lg:ml-8 lg:mt-12"
            onSubmit={() => {}}
          >
            <label htmlFor="email" className="font-semibold text-black">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email..."
              className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75"
            />
            <label htmlFor="phonenumber" className="font-semibold text-black">
              Mpesa Phone number
            </label>
            <input
              required
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="Mpesa Number..."
              className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75"
            />
            <label htmlFor="amount" className="font-semibold text-black">
              Amount
            </label>
            <input
              required
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount..."
              min={0}
              className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75"
            />
            <div className="w-full">
              <input
                type="submit"
                value="Donate"
                className="bg-secondary h-[45px]  rounded-[60px] text-white hover:opacity-85 hover:scale-105  transition-all duration-200 ease-in-out shadow-xl flex items-center gap-2 lg:px-6 mt-2 mb-2 font-bold w-full lg:w-[60%]"
              />
            </div>
          </form>
        </div>
        <div className="w-full bg-[#E0F7FA] px-4 py-2 flex flex-col gap-2 items-center pb-4">
          <h2 className="w-full text-secondary font-bold text-2xl mt-2 mb-2">
            Do you want to donate Resources or other Materials?
          </h2>
          <h3 className="w-full text-black font-semibold text-2xl mt-2 mb-2">
            2. Reach Out To Us
          </h3>
          <form
            action=""
            className="flex flex-col w-full lg:w-[60%] flex-1"
            onSubmit={() => {}}
          >
            <div className="w-full grid lg:grid-cols-2 gap-4  grid-cols-1 flex-1">
              <div className="w-full flex flex-col">
                <label htmlFor="firstname" className="font-semibold text-black">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name..."
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="lastname" className="font-semibold text-black">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name..."
                  min={0}
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75"
                />
              </div>

              <div className="w-full  flex flex-col">
                <label htmlFor="email" className="font-semibold text-black">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email..."
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75"
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="phonenumber"
                  className="font-semibold text-black"
                >
                  Phone number
                </label>
                <input
                  required
                  type="tel"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Phone Number..."
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-6 mb-4">
              <label htmlFor="message" className="font-semibold text-black">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                // cols={6}

                placeholder="Message..."
                className="px-4 py-2 rounded-md outline-none border-tersiary border-[3px] placeholder:text-black/75 h-[160px]"
              ></textarea>
            </div>
            <div className="w-full">
              <input
                type="submit"
                value="Share With Us"
                className="bg-secondary  h-[45px]  rounded-[60px] text-white hover:opacity-85 hover:scale-105  transition-all duration-200 ease-in-out shadow-xl gap-2 lg:px-6 mt-2 mb-2 font-bold w-full lg:w-[60%]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
