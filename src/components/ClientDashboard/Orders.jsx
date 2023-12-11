import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

function Orders({
  status,
  paymentStatus,
  total,
  shipping,
  id,
  products,
  date,
}) {
  let totalProducts = 0;
  products?.map((product) => (totalProducts += product.quantity));

  const newDate = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };

  const language = localStorage.getItem("pageLanguage")

  const readableDate = newDate.toLocaleDateString(language === "en" ? "en-US" : "es-ES", options);
  const formatedDate = readableDate.split(" ");
  const showingDate = formatedDate.slice(0, 3).join(" ");

  const [detailedInfo, setDetailedInfo] = useState(false);

  function handleInfo() {
    setDetailedInfo(!detailedInfo);
  }

  return (
    <>
      <div className="flex gap-4 text-center pb-2" onClick={handleInfo}>
        <div className="w-[25%] lg:text-base text-xs break-words">
          <p>{id}</p>
        </div>
        <div className="lg:w-[10%] w-[20%] lg:text-base text-xs break-words">
          <p>{totalProducts}</p>
        </div>
        <div className="lg:w-[10%] w-[15%] lg:text-base text-xs break-words">
          <p>{status}</p>
        </div>
        <div className="w-[15%] lg:text-base text-xs break-words">
          <p>{showingDate}</p>
        </div>
        <div className="lg:w-[10%] w-[15%] lg:text-base text-xs break-words">
          <p>{total / 100}</p>
        </div>
        <div className="lg:flex hidden">
          <button onClick={handleInfo}>
            {detailedInfo ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
          </button>
        </div>
      </div>
      {detailedInfo
        ? products?.map((product, index) => {
            return (
              <div className={`flex gap-4 py-2 w-full ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"}`} onClick={handleInfo}>
                <div className="w-[25%] text-center lg:text-base text-xs">
                <p>{product.description}</p>
                </div>
                <div className="lg:w-[10%] w-[20%]">
                </div>
                <div className="lg:w-[10%] w-[15%]">
                </div>
                <div className="w-[15%]">
                </div>
                <div className="lg:text-base text-xs text-center lg:w-[10%] w-[15%]">
                <p>
                  {product.quantity} x $ {product.amount_subtotal / 100}
                </p>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Orders;
