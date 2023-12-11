import React from "react";

const CountryPopUp = ({
  popUp,
  setPopUp,
  title,
  mainText1,
  mainText2,
  cancelButton,
  alert,
  subscribeButton,
  placeholder,
  country,
}) => {
  const imagebg =
    "https://firebasestorage.googleapis.com/v0/b/zmeyphotos.appspot.com/o/Design%20sem%20nome%20(1).jpg?alt=media&token=24ca9d90-6e7e-4a50-a8dd-439a849d5b51&_gl=1*d32gga*_ga*NTE5NTU1MjUyLjE2ODU1NzA0MjY.*_ga_CW55HF8NVT*MTY4NjMzMzcyNi4xOS4xLjE2ODYzMzY1MzMuMC4wLjA.";

  if (!popUp) return null;
  return (
    <div className="2xl:mx-auto 2xl:container fixed inset-0 bg-coal bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40 animate-fade animate-once animate-duration-1000 animate-ease-in">
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
          <img
            src={`https://flagsapi.com/${country}/flat/64.png`}
            alt="countryflag"
          />
          <h1 className="text-4xl leading-9 text-white text-center font-roboto tracking-wider">
            {title} {country}
          </h1>
          <p className="text-xl leading-normal text-center text-white mt-6 font-roboto tracking-wider">
            {mainText1} <br />
            {mainText2} {country}
          </p>
          <div className="">
            <button
              className="text-black text-lg font-roboto font-bold tracking-wider bg-white py-4 px-6 mt-4 rounded-md"
              onClick={() => {
                //save into the local storage
                localStorage.setItem("popup", "true");
                setPopUp(false);
              }}
            >
              {cancelButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPopUp;
