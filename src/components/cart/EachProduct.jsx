import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { BiTrash } from "react-icons/bi";
import {
  subProductFunction,
  sumProductFunction,
} from "../../app/actions/cart/modifyQuantity";
import { delProductFunction } from "../../app/actions/cart/delProduct";

function EachProduct({
  name,
  color,
  size,
  image,
  price,
  quantity,
  maxQuantity,
  sizeT,
  colorT
}) {
  const dispatch = useDispatch();

  const handleSum = () => {
    dispatch(sumProductFunction({name, color, size}));
  };

  const handleSub = () => {
    dispatch(subProductFunction({name, color, size}));
  };

  const handleDelete = () => {
    dispatch(delProductFunction({name, color, size}));
  };

  return (
    <div className="flex gap-2 border-b justify-between py-4 w-full">
      <div className="flex w-[124px]">
        <img src={image} alt={name} className="w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 w-[170px]">
        <h1 className="font-medium break-words md:text-xl">{name}</h1>
        <p className="text-gray-500 text-sm md:text-lg">$ {price}</p>
        <p className="text-gray-500 text-sm md:text-lg">{colorT} {color}</p>
        <p className="text-gray-500 text-sm md:text-lg">
          {sizeT} {size.toUpperCase()}
        </p>
        <div className="flex w-[120px] justify-between h-full border-gray-600 border px-4 py-2">
          <button onClick={handleSub} disabled={quantity === 1}>
            <AiOutlineMinus />
          </button>
          <div>
            <p>{quantity}</p>
          </div>
          <button onClick={handleSum} disabled={quantity === maxQuantity}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between w-[60px] text-center">
        <p className="md:text-lg">$ {price * quantity}</p>
        <div className="flex items-center justify-center text-center h-11 text-xl md:text-3xl text-red-500">
          <button onClick={handleDelete}>
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;
