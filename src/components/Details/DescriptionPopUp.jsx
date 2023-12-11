import React from "react";

function DescriptionPopUp({ description, setPopUp }) {
  return (
    <div onClick={() => setPopUp(false)} className="2xl:mx-auto 2xl:container fixed inset-0 bg-coal bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20 animate-fade animate-once animate-duration-200 animate-ease-in">
      <div onClick={(e) => e.stopPropagation()} className="lg:w-[50%] w-[80%] lg:max-h-[70%] max-h-[90%] overflow-y-auto bg-white relative items-center justify-center border-2 border-black z-30">
        <p className="text-xl text-black font-roboto px-4 py-2">{description}</p>
      </div>
    </div>
  );
}

export default DescriptionPopUp;
