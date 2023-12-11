import React, { useState } from "react";
import EachProduct from "./EachProduct";
import BuyButton from "../BuyButton";

function CartWithProducts({
  products,
  user,
  product,
  total,
  checkout,
  sizeT,
  logInAlert,
  alertNoSelected,
  subtotal,
  colorT,
  discountText
}) {
  let price = 0;
  products?.map((product) => (price += product.price * product.quantity));

  const [code, setCode] = useState("")

  return (
    <div className="w-full h-screen max-h-screen flex flex-col justify-evenly items-center py-2 sm:py-4 px-8">
      <div className="flex flex-col w-full sm:max-h-[450px] sm:h-[450px] max-h-[400px] h-[400px] overflow-auto">
        {products.length &&
          products.map((product) => {
            return (
              <EachProduct
                name={product.name}
                color={product.color}
                size={product.size}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                maxQuantity={product.maxQuantity}
                key={product.name}
                sizeT={sizeT}
                colorT={colorT}
              />
            );
          })}
      </div>
      <div className="flex flex-col w-fit sm:py-1">
          <label className="font-roboto text-lg">
            {discountText}
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border border-gray-700 rounded-sm font-roboto font-light px-1"
          />
        </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex w-full justify-center pb-2 items-center">
          <p className="font-medium text-base">{subtotal}</p>
          <p className="pl-6 text-xl text-gray-600 font-thin">
            $ {price.toFixed(2)} USD
          </p>
        </div>
        <div className="flex w-full sm:w-64">
          <BuyButton
            items={products}
            text={checkout}
            user={user}
            alertNoSelected={alertNoSelected}
            logInAlert={logInAlert}
            code={code || undefined}
          />
        </div>
      </div>
    </div>
  );
}

export default CartWithProducts;
