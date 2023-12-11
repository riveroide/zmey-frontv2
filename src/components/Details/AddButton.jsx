import React from "react";

function AddButton({ handleCart, text }) {
  return (
    <div className="w-full flex justify-center pt-3">
      <div className="w-[90%]">
        <button
          onClick={handleCart}
          className={`border-4 border-[#DDA63A] rounded-full w-full text-[#DDA63A] bg-white py-2 text-[18px] font-bold`}
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default AddButton;
