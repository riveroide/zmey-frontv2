import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyOrder } from "../../../../app/actions/orders/putOrders";
import Swal from "sweetalert2";

const DeliveredInfo = ({ code, setCode, setInput, setLoading, oneOrderAdmin}) => {
  const dispatch = useDispatch();
  const [trackingCode, setTrackingCode] = useState("");

  function handleChange(e) {
    setTrackingCode(e.target.value);
  }

  function handleSubmit() {
    if (trackingCode.length < 5) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'info',
        title: 'Please enter a valid code',
        showConfirmButton: false,
        timer: 1200
      });
    }
  
    const updatedOrder = {
      ...oneOrderAdmin,
      trackingCode,
      deliveryStatus: "delivered",
    };
  
    dispatch(modifyOrder(updatedOrder))
      .then(() => {
        setInput(updatedOrder);
        Swal.fire({
          position: 'bottom-end',
          icon: 'info',
          title: 'Code sended to the customer',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
      
    setCode(false);
  }
  
  

  if (code) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center text-black">
        <div className="flex flex-col w-[40%] h-[30%] bg-gray-300 opacity-100 rounded-2xl">
          <div className="flex flex-col justify-center text-center items-center h-[70%] gap-4">
            <label>Please enter the tracking code below:</label>
            <input
              type="text"
              placeholder="Enter here..."
              onChange={handleChange}
              className="w-[70%] text-center"
            />
            <button
              className="p-2 border-black rounded-xl border-2 hover:bg-white hover:text-black hover:duration-500"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
          <div className="flex justify-center items-end h-[30%]">
            <button
              className="p1 border-1 border-black"
              onClick={() => {
                setCode(false);
              }}
            >
              back
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DeliveredInfo;


