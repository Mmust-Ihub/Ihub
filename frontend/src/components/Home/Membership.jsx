import React from "react";

function Membership() {
  return (
    <div className="w-screen px-6 lg:px-[80px] py-16 flex flex-col membershipbg  justify-center items-center">
      <h2 className="w-full text-secondary font-bold text-2xl mt-4 mb-8 text-left ">
        Membership
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="w-full h-[320px] bg-white rounded-xl relative shadow-md shadow-black">
          <div className="flex w-full flex-col gap-8 justify-center items-center py-8">
            <div className="gap-2 flex flex-col">
              <h3 className="text-tersiary font-bold text-xl">Basic Plan</h3>
              <p className="text-black font-mono font-semibold text-lg tracking-wider">
                $10/Month
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-black font-semibold">
              <li>Access To Basic Resourses</li>
              <li>Monthly Newsletter</li>
              <li>Community Forum Access</li>
              <li>Limited Event Participation</li>
            </ul>
          </div>
          <a
            href="/membership"
            className="bg-secondary px-4 h-[35px]  rounded-[60px] text-white font-[500]  shadow-xl flex items-center gap-2 lg:px-6 mt-6 w-[180px] text-center justify-center lg:ml-[57px] hover:scale-105  transition-all duration-200 ease-in-out  absolute bottom-[-15px] translate-x-[50%] right-[50%] shadow-black"
          >
            <p> Learn More</p>
          </a>
        </div>
        <div className="w-full h-[320px] bg-white rounded-xl relative shadow-md shadow-black">
          <div className="flex w-full flex-col gap-8 justify-center items-center py-8">
            <div className="gap-2 flex flex-col">
              <h3 className="text-tersiary font-bold text-xl">Standard Plan</h3>
              <p className="text-black font-mono font-semibold text-lg tracking-wider">
                $25/Month
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-black font-semibold">
              <li>Enhanced Resourse Access</li>
              <li>Weekly Newsletter</li>
              <li>Priority Community Forum Access</li>
              <li>Extended Event Participation</li>
              <li>Discounts In Workshops</li>
            </ul>
          </div>
          <a
            href="/membership"
            className="bg-secondary px-4 h-[35px]  rounded-[60px] text-white font-[500]  shadow-xl flex items-center gap-2 lg:px-6 mt-6 w-[180px] text-center justify-center lg:ml-[57px] hover:scale-105  transition-all duration-200 ease-in-out  absolute bottom-[-15px] translate-x-[50%] right-[50%] shadow-black"
          >
            <p>Learn More</p>
          </a>
        </div>
        <div className="w-full h-[320px] bg-white rounded-xl relative shadow-md shadow-black">
          <div className="flex w-full flex-col gap-8 justify-center items-center py-8">
            <div className="gap-2 flex flex-col">
              <h3 className="text-tersiary font-bold text-xl">Premium Plan</h3>
              <p className="text-black font-mono font-semibold text-lg tracking-wider">
                $50/Month
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-black font-semibold">
              <li>Full Resourses Access</li>
              <li>Personalized Support</li>
              <li>Exclusive Content</li>
              <li>Unlimited Event Participation</li>
              <li>Networking Opportunities</li>
            </ul>
          </div>
          <a
            href="/membership"
            className="bg-secondary px-4 h-[35px]  rounded-[60px] text-white font-[500]  shadow-xl flex items-center gap-2 lg:px-6 mt-6 w-[180px] text-center justify-center lg:ml-[57px] hover:scale-105  transition-all duration-200 ease-in-out  absolute bottom-[-15px] translate-x-[50%] right-[50%] shadow-black"
          >
            <p>Learn More</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Membership;
