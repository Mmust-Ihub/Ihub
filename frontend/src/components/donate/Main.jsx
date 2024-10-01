import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Main() {
  const [amount, setAmount] = useState(null);
  const [email, setEmail] = useState("");
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateMpesaNumber = (number) => {
    const re = /^(\d{9})$/; // Validates that it has exactly 9 digits
    return re.test(number);
  };

  const handlePaymentWithMpesa = async (e) => {
    e.preventDefault();
    const notify = toast.loading("Initiating STK push...");
    setLoading(true);

    if (!amount || !email || !mpesaNumber) {
      setLoading(false);
      toast.dismiss(notify);
      toast.error("Please fill all the fields", { id: notify });
      return;
    }

    if (!validateEmail(email)) {
      setLoading(false);
      toast.dismiss({ id: notify });
      toast.error("Please enter a valid email address", { id: notify });
      return;
    }

    if (!validateMpesaNumber(mpesaNumber)) {
      setLoading(false);
      toast.dismiss({ id: notify });
      toast.error("Please enter a valid M-Pesa number (9 digits)", {
        id: notify,
      });
      return;
    }

    const fullMpesaNumber = "254" + mpesaNumber;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/donate/mpesa`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            amount: amount,
            phoneNumber: fullMpesaNumber,
          }),
        }
      );

      const data = await response.json();
      setLoading(false);
      toast.dismiss(notify);

      if (response.ok) {
        toast.success(data.status, { id: notify });
        // Clear all fields
        setAmount(null);
        setEmail("");
        setMpesaNumber("");
      } else {
        console.error("Error:", data.status);
        toast.error(data.error, { id: notify });
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.dismiss(notify);
      toast.error("An error occurred. Please try again later", { id: notify });
    } finally {
      // Reset fields in case of an error as well
      setLoading(false);
      setAmount(null);
      setEmail("");
      setMpesaNumber("");
    }
  };

  return (
    <div className="w-screen pb-[220px] flex flex-col justify-center items-center px-4 lg:px-24 py-8">
      <ToastContainer />
      <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
        Choose Your Donation
      </h2>
      <div className="w-full flex flex-col gap-4 justify-start items-start">
        <div className="w-full flex flex-col lg:flex-row gap-4 px-4 py-2 ">
          <h3 className="text-black font-semibold text-2xl mt-2 mb-2">
            1. Donate Via M-Pesa
          </h3>
          <form
            action=""
            className="flex flex-col gap-4 w-full lg:w-[40%] lg:ml-8 lg:mt-12"
            onSubmit={handlePaymentWithMpesa}
          >
            <label htmlFor="email" className="font-semibold text-black">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email..."
              className="px-4 py-2 rounded-md outline-none border-tersiary border-[2px] placeholder:text-black/75"
            />
            <label htmlFor="mpesaNumber" className="font-semibold text-black">
              Mpesa Phone Number
            </label>
            <div className="flex flex-row items-center w-full px-4 py-2 rounded-md outline-none border-tersiary border-[2px]">
              <span className="border-r-2 px-2 border-tersiary text-tersiary">
                254
              </span>
              <input
                required
                type="tel"
                name="mpesaNumber"
                id="mpesaNumber"
                value={mpesaNumber} // Controlled input
                onChange={(e) => {
                  const input = e.target.value;
                  // Allow only digits and limit to 9 characters
                  if (/^\d{0,9}$/.test(input)) {
                    setMpesaNumber(input);
                  }
                }}
                placeholder="Last 9 digits..."
                className="px-4 rounded-md outline-none  placeholder:text-black/75"
              />
            </div>
            <label htmlFor="amount" className="font-semibold text-black">
              Amount
            </label>
            <input
              required
              type="number"
              name="amount"
              id="amount"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount..."
              min={0}
              className="px-4 py-2 rounded-md outline-none border-tersiary border-[2px] placeholder:text-black/75"
            />
            <div className="w-full">
              <input
                type="submit"
                value={loading ? "Processing..." : "Donate"}
                disabled={loading}
                className={`bg-secondary h-[45px] rounded-[60px] text-white hover:opacity-85 hover:scale-105 transition-all duration-200 ease-in-out shadow-xl flex items-center gap-2 lg:px-6 mt-2 mb-2 font-bold w-full 
                  lg:w-[60%] ${loading ? "cursor-not-allowed" : ""}`}
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
            <div className="w-full grid lg:grid-cols-2 gap-4 grid-cols-1 flex-1">
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
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[2px] placeholder:text-black/75"
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
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[2px] placeholder:text-black/75"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="userEmail" className="font-semibold text-black">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter Email..."
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[2px] placeholder:text-black/75"
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="phonenumber"
                  className="font-semibold text-black"
                >
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Phone Number..."
                  className="px-4 py-2 rounded-md outline-none border-tersiary border-[2px] placeholder:text-black/75"
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
                placeholder="Message..."
                className="px-4 py-2 rounded-md outline-none border-tersiary border-[2px] placeholder:text-black/75 h-[160px]"
              ></textarea>
            </div>
            <div className="w-full">
              <input
                type="submit"
                value="Share With Us"
                className="bg-secondary h-[45px] rounded-[60px] text-white hover:opacity-85 hover:scale-105 transition-all duration-200 ease-in-out shadow-xl gap-2 lg:px-6 mt-2 mb-2 font-bold w-full lg:w-[60%]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
