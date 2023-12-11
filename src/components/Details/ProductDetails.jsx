import React, { useState } from "react";
import DescriptionPopUp from "./DescriptionPopUp";

function ProductDetails({
  name,
  description,
  colors,
  sizes,
  stock,
  price,
  handleColor,
  handleSize,
  selectedColor,
  selectedSize,
  seeMore
}) {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="w-full h-full flex justify-center px-2 lg:px-0">
      {popUp && (
        <DescriptionPopUp description={description} setPopUp={setPopUp} />
      )}
      <div className="flex flex-col w-full gap-4">
        <h1 className="font-bold text-[30px] break-words"> {name} </h1>
        <p className="text-[16px] text-gray-700 font-bold md:text-[20px]">
          $ {price}
        </p>
        <div>
          <p className="text-xl text-gray-700  max-w-full font-roboto">
            {description.length > 180
              ? description.slice(0, 180) + "... "
              : description}
          </p>
          {description.length > 180 ? (
            <p
              className=" w-fit text-lg text-gray-700 font-roboto underline underline-offset-4 cursor-pointer hover:text-black"
              onClick={() => setPopUp(true)}
            >
              {seeMore}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-[14px]"> Color </p>
          <div className="flex gap-4 max-w-full overflow-auto scrollbar md:py-2">
            {colors?.map((color) => {
              return (
                <button
                  key={color}
                  value={color}
                  onClick={(e) => handleColor(e)}
                  className={`py-1 px-6 border border-gray-600 rounded-full text-[16px] ${
                    selectedColor?.toLowerCase() === color.toLowerCase()
                      ? "bg-[#010101] text-white"
                      : ""
                  }`}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-[14px]"> Size </p>
          <div className="flex gap-4 max-w-full overflow-auto scrollbar md:py-2">
            {sizes?.map((size) => {
              let available = 0;
              // eslint-disable-next-line array-callback-return
              stock?.map((each) => {
                if (
                  each.color?.toLowerCase() === selectedColor?.toLowerCase()
                ) {
                  each.sizes?.map((thisSize) => {
                    if (thisSize?.size?.toLowerCase() === size?.toLowerCase()) {
                      available = thisSize.quantity;
                    }
                  });
                }
              });
              return (
                <button
                  key={size}
                  value={size}
                  disabled={available < 1}
                  onClick={(e) => handleSize(e)}
                  className={`py-1 px-6 border rounded-full text-[16px] border-black ${
                    selectedSize?.toLowerCase() === size.toLowerCase()
                      ? "bg-[#010101] text-white"
                      : ""
                  }${
                    available < 1
                      ? "border-gray-400 text-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {size?.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
