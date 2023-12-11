import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../app/axiosConfig";
import Swal from "sweetalert2";
import { checkCode } from "../app/actions/codes/checkCode";

function BuyButton({ items, text, active, alertNoSelected, code }) {
  const { currentUser } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch()

  const handleBuy = async () => {
    if (active)
      return Swal.fire({
        position: "center",
        backdrop: false,
        icon: "warning",
        title: alertNoSelected,
        showConfirmButton: false,
        timer: 1500,
      });
    if (code) {
      var existCode = await dispatch(checkCode(code));
      if (!existCode)
        return Swal.fire({
          position: "center",
          backdrop: false,
          icon: "error",
          title: "Invalid Code",
          showConfirmButton: false,
          timer: 1500,
        });
    }
    let totalPrice = 0;
    let discount = 0.1;
    let array = [];
    if (!Array.isArray(items)) {
      array.push(items);
    } else array = items;
    array.forEach(
      (product) => (totalPrice += product.price * product.quantity)
    );
    if (code) totalPrice -= totalPrice * discount;
    if (totalPrice < 50) {
      await axios
        .post("/stripe/paymentless50", {
          products: array,
          email: currentUser?.email || undefined,
          userId: currentUser?.id || undefined,
          code: existCode?.code || undefined,
          oneTimeCode: existCode?.oneTimeCode || false,
          codeId: existCode?.id || undefined
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      await axios
        .post("/stripe/paymentmore50", {
          products: array,
          email: currentUser?.email || undefined,
          userId: currentUser?.id || undefined,
          code: code || undefined,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%]">
        <button
          onClick={() => handleBuy()}
          className="border rounded-full w-full text-white bg-[#010101] py-2 text-[18px] font-medium"
        >
          {text}
        </button>
      </div>
    </div>
  );
}

export default BuyButton;
