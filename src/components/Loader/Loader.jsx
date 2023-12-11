import React from "react";
import LogoLoader from "../../assets/PNG-02.png";

const Loader = () => {
  return (
    <div className="min-h-screen bg-black transition-opacity">
      <div className="min-h-screen flex flex-col justify-center items-center bg-black animate-pulse z-50">
        <img src={LogoLoader} alt="logoloader" className="h-24 w-24 " />
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
