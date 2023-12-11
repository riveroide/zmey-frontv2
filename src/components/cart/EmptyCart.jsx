import React from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../app/actions/products/getProducts";
import { useDispatch } from "react-redux";

function EmptyCart({ empty, continueShopping, setShowCart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getProducts());
    navigate("/results");
    setShowCart(false)
  };
  return (
    <div className="flex flex-col w-full min-h-full justify-center items-center gap-4">
      <h1 className="text-[#010101] text-3xl font-extrabold">{empty}</h1>

      <button
        className="bg-[#010101] text-white py-3 px-4 rounded-full"
        onClick={handleClick}
      >
        {continueShopping}
      </button>
    </div>
  );
}

export default EmptyCart;
