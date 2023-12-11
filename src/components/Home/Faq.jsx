import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  useEffect(() => {
     window.scrollTo(0, 0)
  }, [])
  

  const { t } = useTranslation("faq");

  return (
    <div
      id="FAQ"
      className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 min-w-full bg-coal"
    >
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-white font-semibold pt-8">
        {t("faqTitle")}
      </h1>

      <div className=" lg:mt-12 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
        <div className=" flex justify-between md:flex-row flex-col ">
          <div className=" md:mb-0 mb-8 md:text-left text-center ">
            <h2 className=" font-medium text-2xl leading-5 text-white lg:mb-2 mb-4">
              {t("questions")}
            </h2>
            <p className=" font-normal text-lg leading-5 text-gray-200 md:w-8/12 md:ml-0 w-11/12 mx-auto font-roboto ">
              {t("questionsMessage")}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-8/12 w-full mx-auto font-roboto">
        {/* <!-- Question 1 --> */}
        <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

        <div className="w-full md:px-6">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className=" ">
              <p className="flex justify-center items-center font-medium text-xl leading-6 md:leading-4 text-gray-200  tracking-wide">
                {" "}
                <span className="lg:mr-6 mr-4 text-xl leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-200">
                  {t("q1")}
                </span>{" "}
                {t("q1Question")}
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 bg-white rounded-lg"
              onClick={() => setOpen(!open)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open ? "block animate-fade-down animate-once animate-duration-[500ms]" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-200 font-roboto ">
              {t("q1Answer")}
            </p>
          </div>
        </div>

        {/* <!-- Question 2 --> */}

        <hr className=" w-full lg:mt-10 my-8 " />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-xl leading-6 lg:leading-4 text-gray-200  tracking-wide">
                {" "}
                <span className="lg:mr-6 mr-4 text-xl leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-200 ">
                  {t("q2")}
                </span>{" "}
                {t("q2Question")}
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-white rounded-lg"
              onClick={() => setOpen2(!open2)}
            >
              <svg
                className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open2 ? "block animate-fade-down animate-once animate-duration-[500ms]" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-200">
              {t("q2Answer")}
            </p>
          </div>
        </div>

        {/* <!-- Question 3 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-xl leading-6 lg:leading-4 text-gray-200  tracking-wide">
                {" "}
                <span className="lg:mr-6 mr-4 text-xl leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-200">
                  {t("q3")}
                </span>
                {t("q3Question")}
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 bg-white rounded-lg"
              onClick={() => setOpen3(!open3)}
            >
              <svg
                className={"transform " + (open3 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open3 ? "block animate-fade-down animate-once animate-duration-[500ms]" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-200 ">
              {t("q3Answer1")}
              <br />
              {t("q3Answer2")}
              <br />
              {t("q3Answer3")}
              <br />
              {t("q3Answer4")}
              <br />
              <br />
              {t("q3Answer5")}
              <br />
              <br />
              {t("q3Answer6")}
            </p>
          </div>
        </div>

        {/* <!-- Question 4 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-xl leading-6 lg:leading-4 text-gray-200  tracking-wide">
                {" "}
                <span className="  lg:mr-6 mr-4 text-xl leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-200">
                  {t("q4")}
                </span>
                {t("q4Question")}
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 bg-white rounded-lg"
              onClick={() => setOpen4(!open4)}
            >
              <svg
                className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open4 ? "block animate-fade-down animate-once animate-duration-[500ms]" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-200 ">
              {t("q4Answer1")}
              <br />
              {t("q4Answer2")}
              <br />
              {t("q4Answer3")}
              <br />
              {t("q4Answer4")}
              <br />
              {t("q4Answer5")}
              <br />
              {t("q4Answer6")}
              <br />
              <br />
              {t("q4Answer7")}
              <br />
              <br />
              {t("q4Answer8")}
            </p>
          </div>
        </div>

        {/* <!-- Question 5 --> */}

        {/* <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-200">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-200">
                  Q5.
                </span>
                Where do i find products that i have seen in magazines or Social
                Media?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-white rounded-lg"
              onClick={() => setOpen5(!open5)}
            >
              <svg
                className={"transform " + (open5 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open5 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-200 font-normal">
              Remember you can query the status of your orders any time in My
              orders in the My account section. if you are not resigered at
              Mango.com, you can access dierectly in the Orders section. In this
              cause, you will have enter your e-mail address and order number.
            </p>
          </div>
        </div>

        <hr className=" w-full lg:mt-10 my-8" /> */}
      </div>
    </div>
  );
};

export default Faq;
