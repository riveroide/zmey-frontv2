import React, { useState } from "react";
import axios from "../../app/axiosConfig";
import codeGenerator from "../../utils/codeGenerator";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { postSubscriber } from "../../app/actions/subscribe/postSubscriber";
import { postCode } from "../../app/actions/codes/postCode";
import { postNewsletter } from "../../app/actions/newsletter/postNewsletter";

function NewsletterPopUp({ newsletterPopUp, setNewsletterPopUp }) {
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  async function handleSubmit() {
    if (!validEmail.test(input)) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter a valid email",
        showConfirmButton: false,
        timer: 2000,
        background: "#000000",
        color: "#ffffff",
      });
    }
    const exist = await axios.get(`/newsletter/${input}`);
    console.log(exist.data.length);
    if (exist.data.length) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Email alredy registered",
        showConfirmButton: false,
        timer: 2000,
        background: "#000000",
        color: "#ffffff",
      });
    } else {
      const code = codeGenerator(10);
      await dispatch(postCode(code, true));
      await dispatch(postNewsletter(input, code));
    }
    // await dispatch(postSubscriber(input));

    setInput("");
    setNewsletterPopUp(false);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for subscribing!",
        showConfirmButton: false,
        timer: 2000,
        background: "#000000",
        color: "#ffffff",
      });
  }

  const imagebg =
    "https://firebasestorage.googleapis.com/v0/b/zmeyphotos.appspot.com/o/Design%20sem%20nome%20(1).jpg?alt=media&token=24ca9d90-6e7e-4a50-a8dd-439a849d5b51&_gl=1*d32gga*_ga*NTE5NTU1MjUyLjE2ODU1NzA0MjY.*_ga_CW55HF8NVT*MTY4NjMzMzcyNi4xOS4xLjE2ODYzMzY1MzMuMC4wLjA.";

  if (!newsletterPopUp) return null;
  return (
    <div className="2xl:mx-auto 2xl:container fixed inset-0 bg-coal bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40 animate-fade-up animate-once animate-duration-300 animate-ease-in">
      <div className="w-[80%] relative flex items-center justify-center border-2 rounded-xl z-50">
        <img
          src={imagebg}
          alt="dining"
          className="w-full h-full absolute z-0 hidden xl:block object-cover rounded-xl"
        />
        <img
          src={imagebg}
          alt="dining"
          className="w-full h-full absolute z-0 hidden sm:block xl:hidden object-cover rounded-xl"
        />
        <img
          src={imagebg}
          alt="dining"
          className="w-full h-full absolute z-0  sm:hidden object-cover rounded-xl"
        />
        <div className="bg-black bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40 rounded-xl">
          <h1 className="text-4xl leading-9 text-white text-center font-roboto tracking-wider">
            Unlock 10% off your first order
          </h1>
          <p className="text-xl leading-normal text-center text-white mt-6 font-roboto tracking-wider">
            Subscribe to our newsletter for special offers and updates
          </p>

          <input
            type="email"
            className="form-control block w-full lg:w-[80%] xl:w-[60%] mt-6 px-4 py-2 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none font-roboto"
            value={input}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="inline-block w-full lg:w-[80%] xl:w-[60%] px-7 py-3 bg-white text-black text-lg font-roboto font-bold leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg hover:text-white active:bg-[#DDA63A] active:shadow-lg transition duration-500 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Unlock Offer
          </button>
          <p className="text-slate-400 text-base font-poppins mt-2 w-full text-center">
            By subscribing, you agree to receive marketing emails
          </p>

          <div className="">
            <button
              className="text-white text-lg font-roboto tracking-wider mt-10"
              onClick={() => {
                setNewsletterPopUp(false);
              }}
            >
              No, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterPopUp;
