import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartWithProducts from "./CartWithProducts";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";

function Cart({ visible, setShowCart }) {
  const { cartProducts } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.userInfo);
  const ref = useRef();
  const { t } = useTranslation("cart");

  useEffect(() => {
    const checkClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", checkClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [setShowCart, ref]);

  if (!visible) return null;
  else
    return (
      <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm flex z-50 inset-0">
        <div
          className="flex flex-col lg:w-[500px] h-screen max-h-screen w-full fixed z-50 right-0 top-0 bg-white font-bold animate-fade-left animate-once animate-duration-300 animate-ease-out animate-normal animate-fill-forwards"
          ref={ref}
        >
          <div className="flex w-full justify-between items-center px-8 sm:mt-4 mt-1">
            <h1 className="text-[#010101] text-2xl font-medium">
              {t("yourCart")}
            </h1>

            <p
              className="text-black text-2xl font-medium cursor-pointer"
              onClick={() => setShowCart(false)}
            >
              <AiOutlineClose />
            </p>
          </div>
          {!cartProducts.length ? (
            <EmptyCart
              empty={t("empty")}
              continueShopping={t("continue shopping")}
              setShowCart={setShowCart}
            />
          ) : (
            <CartWithProducts
              products={cartProducts}
              user={currentUser}
              checkout={t("checkout")}
              product={t("product")}
              total={t("total")}
              sizeT={t("size")}
              logInAlert={t("logInAlert")}
              alertNoSelected={t("alertNoSelected")}
              subtotal={t("subtotal")}
              colorT={t("colorT")}
              discountText={t("discountText")}
            />
          )}
        </div>
      </div>
    );
}
export default Cart;
